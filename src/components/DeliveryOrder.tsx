import delivery from '../assets/delivery.webp';
import useInput from "../hooks/useInput.ts";
import {SyntheticEvent, useEffect, useState} from "react";
import useDebounce from "../hooks/useDebounce.ts";
import {Link} from "react-router-dom";
import ComtelButton from "./ui/ComtelButton.tsx";
import axios from "axios";
const DeliveryOrder = () => {

    const name = useInput('', {isEmpty: true, minLength: 3});
    const [nameError, setNameError] = useState('');
    const phone = useInput('', {isEmpty: true, minLength: 9, maxLength: 16, isPhone: true});
    const [phoneError, setPhoneError] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);
    const [check, setCheck] = useState(false);

    const clearValues = () => {
        name.clearValue()
        phone.clearValue()
    }
    const data = `
        name: ${name.value}
        phone: ${phone.value}
    `
    const sendMessage = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(data);
        const baseUrl = 'https://api.telegram.org/bot';
        const token = '7054402811:AAG0YIDg8JafR-8kufT5mInou47QIpIS89o';
        const chatId = '-4136555670';
        const method = '/sendMessage';
        const text = data;
        const url = baseUrl + token + method + '?chat_id=' + chatId + '&text=' + text;

        clearValues();

        axios.get(url)
            .then(res => {
                if (res.status == 200) {
                    console.log('успешно ' + res.data);
                } else if (res.status == 400) {
                    console.log('ошибка ' + res.data)
                }
            })
    }
    const nameValidator = () => {
        if (!name.isDirty) return

        if (name.isDirty && name.isEmpty) {
            setNameError('Поле не может быть пустым')
        } else if (name.isDirty && name.minLengthError || name.maxLengthError) {
            setNameError('Длина не меньше 3 и не больше 20 символов')
        } else {
            setNameError('');
        }
    }
    const phoneValidator = () => {
        if (!phone.isDirty) return

        if (phone.isDirty && phone.isEmpty) {
            setPhoneError('Поле не может быть пустым')
        } else if (phone.isDirty && phone.minLengthError || phone.maxLengthError) {
            setPhoneError('Неверная длина телефона')
        } else if (phone.isDirty && phone.phoneError) {
            setPhoneError('Неверный формат телефона')
        } else {
            setPhoneError('');
        }
    }

    const nameValidatorDebounce = useDebounce(nameValidator, 250);
    const phoneValidatorDebounce = useDebounce(phoneValidator, 250);

    useEffect(() => {
        if (name.inputValid && phone.inputValid && check) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
        nameValidatorDebounce();
        phoneValidatorDebounce();
    }, [name, phone, nameValidatorDebounce, phoneValidatorDebounce, check]);

    return (
        <div className="h-[70vh] bg-black flex flex-col justify-evenly items-center">
            <div className="flex lg:w-9/12">
                <img className="w-[45%] hidden lg:block rounded-bl-3xl rounded-tl-3xl" src={delivery} alt=""/>
                <div className="w-full flex flex-col justify-evenly lg:w-[55%] bg-orange h-[65vh] lg:h-[55vh] py-4 rounded-bl-3xl rounded-tl-3xl lg:rounded-bl-none lg:rounded-tl-none rounded-tr-3xl rounded-br-3xl">
                    <h3 className="text-center text-4xl text-white font-bold font-mont xl:text-5xl px-4 mb-10">Закажите доставку</h3>
                    <form className="flex flex-col items-center px-4 gap-3" action="">
                        {nameError && <p className="text-black font-medium self-start">{nameError}</p>}
                        <input className="w-full h-10 bg-zinc-200 rounded-xl pl-10 shadow-sm border border-zinc-300 font-mont placeholder:text-zinc-500 my-1"
                               placeholder="Имя"
                               type="text"
                               onBlur={e => name.onBlur(e)}
                               value={name.value}
                               onChange={e => name.onChange(e)}
                               name="name"
                        />
                        {phoneError && <p className="text-black font-medium self-start">{phoneError}</p>}
                        <input className="w-full h-10 bg-zinc-200 rounded-xl pl-10 shadow-sm border border-zinc-300 font-mont placeholder:text-zinc-500 my-1"
                               placeholder="Номер телефона"
                               type="text"
                               onBlur={e => phone.onBlur(e)}
                               value={phone.value}
                               onChange={e => phone.onChange(e)}
                               name="phone"
                        />
                        <label className="font-mont mt-2 mb-10 lg:mb-2 text-center">
                            <input onClick={() => setCheck(prevState => !prevState)} className="w-4 h-4 accent-black focus:ring-blue-500 mr-3" type="checkbox"/>
                            <span>Даю согласие на обработку <Link to='/privacy' className="font-bold">персональных данных</Link></span>
                        </label>
                        <ComtelButton size='!w-full' disabled={!formIsValid} background='bg-black' text='Отправить' onClick={sendMessage}/>
                    </form>
                    <Link className="text-center" to='/delivery-term' >Условия доставки</Link>
                </div>
            </div>
        </div>
    );
};

export default DeliveryOrder;