import {useEffect, useState} from "react";
import Logo from "./ui/icons/Logo.tsx";
import {Link} from "react-router-dom";
import ComtelButton from "./ui/ComtelButton.tsx";
import closedIcon from '../assets/navClosedIcon.svg';
import ModalWindow from "./ModalWindow.tsx";
import useOveflow from "../hooks/useOveflow.ts";
import {createPortal} from "react-dom";

const NavLinks = [
    {label: 'Цены', href: '/#prices'},
    {label: 'О нас', href: '/#about'},
    {label: 'Контакты', href: '/#contacts'},
    {label: 'Вопросы', href: '/#questions'},
]
const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [test, setTest] = useState<boolean>(false);
    useOveflow(isOpen)

    const testHandler = () => {
        setTest(prevState => !prevState)
        console.log(String(test))
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isOpen]);

    const openHandler = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <header className="bg-orange">
            {/*пк версия*/}
            <nav className="hidden h-[8vh] w-full lg:flex justify-center gap-10 items-center bg-milk">
                <div className="w-20">
                    <Logo/>
                </div>
                {NavLinks.map(nav => (
                    <Link
                        key={`navigation${nav.href}`}
                        className="p-2 rounded text-white font-semibold hover:text-black duration-300 font-mont xl:text-xl"
                        to={nav.href}
                        onClick={() => setIsOpen(false)}
                    >
                        {nav.label}
                    </Link>
                ))}
                <ComtelButton onClick={testHandler} padding="py-2 px-10" size="text-xl" background='bg-black' text='Заказать доставку'/>
                {
                    test && createPortal(
                      <div className='fixed h-screen w-screen z-[52] top-0 lg:flex lg:items-center lg: justify-center'><ModalWindow visibility={test} close={testHandler}/></div>  , document.body)
                }
                <div className="flex flex-col items-center">
                    <p className="text-white font-semibold font-mont xl:text-xl">Свяжитесь с нами</p>
                    <a className="font-semibold hover:text-white" href='tel:+79053336969'>+7 (905) 333-69-69</a>
                </div>
            </nav>
            <button
                className="w-12 h-12 z-[51] fixed right-3 top-3 lg:hidden"
                onClick={openHandler}>
                <img src={closedIcon} alt="Закрыть"/>
            </button>
            {/*mobile*/}
            <nav
                className={`right-0 left-0 top-0 bottom-0 min-h-screen fixed max-w-full z-50 backdrop-blur flex lg:hidden flex-col justify-evenly items-center backdrop-brightness-50 duration-1000 ease-in-out ${!isOpen ? 'right-full left-full bottom-full !-top-full' : ''}`}>
                <div className="w-40">
                    <Logo onClick={openHandler}/>
                </div>
                <div className="flex flex-col w-full text-white font-mont text-xl items-center gap-4">
                    {NavLinks.map(nav => (
                        <Link
                            className="w-5/6 rounded text-center shadow-orange shadow-sm py-2 hover:bg-orange focus-visible:outline-none focus-visible:border-green focus-visible:border-2"
                            to={nav.href}
                            key={`mobile${nav.label}`}
                            onClick={openHandler}
                        >
                            {nav.label}
                        </Link>
                    ))}
                    <div className="w-11/12 flex flex-col gap-5">
                        <div className="flex flex-col items-center">
                            <p className="text-white font-semibold font-mont xl:text-xl">Свяжитесь с нами</p>
                            <a className="font-semibold hover:text-white" href='tel:+79053336969'>+7 (905) 333-69-69</a>
                        </div>
                        <ComtelButton size="text-xl" background='bg-black' text='Заказать доставку'/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;