import useInput from "../hooks/useInput.ts";
import {FC, SyntheticEvent, useEffect, useState} from "react";
import useDebounce from "../hooks/useDebounce.ts";
import {Link} from "react-router-dom";
import ComtelButton from "./ui/ComtelButton.tsx";
import cross from  "../assets/cross.svg";
import axios from "axios";
import {useNotification} from "../store/useNotification.ts";


interface ModalWindowProps {
    visibility: boolean
    close: () => void
}
const ModalWindow: FC<ModalWindowProps> = ({visibility, close}) => {
    const name = useInput('', {isEmpty: true, minLength: 3});
    const [nameError, setNameError] = useState('');
    const phone = useInput('', {isEmpty: true, minLength: 9, maxLength: 16, isPhone: true});
    const [phoneError, setPhoneError] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);
    const [check, setCheck] = useState(false);

    const open = useNotification(state => state.open)

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
                res.status === 200 && open(res.status)
            })
            .catch(e => {
                open(e.response.status)
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
        visibility &&
        <div className="h-screen bg-orange flex flex-col lg:h-[65vh] lg:w-[25vw] justify-evenly items-center rounded-2xl relative z-[52]">
            <div className="flex lg:w-9/12">
                <button className='text-white' onClick={close}><img className="h-10 w-10 absolute top-3 right-3 z-[52]" src={cross}/></button>
                <div className="w-full flex flex-col justify-center gap-10 lg:w-[100%]  h-[100vh] lg:h-[55vh] py-4 rounded-bl-3xl rounded-tl-3xl lg:rounded-bl-none lg:rounded-tl-none rounded-tr-3xl rounded-br-3xl">
                    <form className="flex flex-col items-center px-4 lg:px-0" action="">
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
                    <Link className="text-center font-mont" to='/delivery-term' >Условия доставки</Link>
                </div>
            </div>
        </div>
    );
};

export default  ModalWindow;