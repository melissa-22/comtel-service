import YandexMap from "./YandexMap.tsx";
import {Link} from "react-router-dom";
import office from '../assets/office.webp';
import WhatsApp from "./icons/social/WhatsApp.tsx";
import Vk from "./icons/social/Vk.tsx";
import Telegram from "./icons/social/Telegram.tsx";

const Footer = () => {
    return (
        <div id='contacts' className="min-h-screen flex justify-end flex-col">
            <h2 className="text-center text-4xl font-bold font-mont xl:text-6xl mb-10">Контакты</h2>
            <div className='flex flex-col lg:flex-row'>
                <div className='h-96 px-4 lg:px-0 w-full lg:w-7/12 lg:h-[700px]'>
                    <YandexMap />
                </div>
                <div className='px-4 font-mont font-medium lg:w-5/12 flex flex-col lg:h-[700px] justify-start'>
                    <h4 className='text-xl text-center my-2 lg:my-0 lg:text-left'>Рады пригласить Вас в наш сервисный центр, где мы предлагаем широкий спектр услуг по ремонту и обслуживанию Вашей техники.</h4>
                    <div className='flex flex-col'>
                        <img className='rounded-3xl w-full h-80 object-cover' src={office} alt=""/>
                        <div>
                            <p>Мы находимся по адресу:</p>
                            <a href='https://yandex.ru/maps/10951/volzhskiy/?ll=44.818587%2C48.761002&mode=poi&poi%5Bpoint%5D=44.811192%2C48.765523&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D91079519059&z=15.54' className='text-orange text-xl hover:text-black duration-300'>г. Волжский ул. Мира 29 (24 мкр за АИК)</a>
                        </div>
                    </div>
                    <p>Для консультации по ремонту и стоимости ремонта звоните по номеру:</p>
                    <a className='text-orange text-xl hover:text-black duration-300' href="tel:+79053336969">+7 (905) 333-69-69</a>
                    <p>График работы: </p>
                    <p className='text-xl'>с пн-сб 10:00-19:00</p>
                    <div className='flex items-center py-3 gap-6'>
                        <a href="wa:123">
                            <WhatsApp color='#ff6600' width={40} height={40} className='hover:fill-black' />
                        </a>
                        <a href="">
                            <Telegram color='#ff6600' width={40} height={40} className='hover:fill-black' />
                        </a>
                        <a href="vk:123">
                            <Vk width={40} height={40} className='hover:fill-black' color='#ff6600' />
                        </a>
                    </div>
                    <div className='mb-10 mt-1'>
                        <Link className='text-orange hover:text-black duration-300' to='/privacy'>Политика конфиденциальности</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;