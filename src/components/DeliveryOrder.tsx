import delivery from '../assets/fast-delivery.png';
import ComtelButton from "./ui/ComtelButton.tsx";
import {createPortal} from "react-dom";
import ModalWindow from "./ModalWindow.tsx";
import {useState} from "react";
const DeliveryOrder = () => {
    const [modal, setModal] = useState<boolean>(false);
    const modalHandler = () => {
        setModal(prevState => !prevState)
    }
    return (
        <div className="min-h-fit flex flex-col justify-evenly items-center">
            <div className="flex items-center lg:w-9/12">
                <img className="w-1/2 hidden lg:block rounded-bl-3xl rounded-tl-3xl" src={delivery} alt=""/>
                <div className="w-full flex flex-col justify-evenly lg:w-[55%] h-[65vh] lg:h-[55vh] p-4 rounded-bl-3xl rounded-tl-3xl lg:rounded-bl-none lg:rounded-tl-none rounded-tr-3xl rounded-br-3xl">
                    <h3 className="text-4xl font-bold font-mont xl:text-5xl">Нет времени идти в сервис?</h3>
                    <p className='text-2xl font-medium'>Закажи доставку и мы доставим ваше устройство в любую часть города</p>
                    <ComtelButton onClick={modalHandler} padding='px-16 py-4' background='bg-black' text='Закажи доставку!' />
                </div>
                {
                    modal && createPortal(
                        <div className='fixed h-screen w-screen backdrop-brightness-75 backdrop-blur z-[52] top-0 lg:flex lg:items-center lg: justify-center'><ModalWindow visibility={modal} close={modalHandler}/></div>  , document.body)
                }
            </div>
        </div>
    );
};

export default DeliveryOrder;