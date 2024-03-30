import slide1 from '../assets/slides/slide1.webp';
import slide2 from '../assets/slides/slide2.webp';
import ComtelLink from "../components/ui/ComtelLink.tsx";
export const sliderData = [
    {
        'content' : <div className="text-white font-mont flex flex-col gap-1 mb-5">
                        <p className="text-orange text-4xl md:text-6xl lg:text-8xl font-bold">ComTel service</p>
                        <p className="text-3xl md:text-5xl lg:text-7xl font-bold">Ремонт вашей техники</p>
                        <div className="flex gap-2">
                            <p className="text-xl font-bold">Экспресс-ремонт</p><span className="text-orange text-xl font-bold">от 20 минут</span>
                        </div>
                        <div className="flex gap-2 mb-5">
                            <p className="text-xl font-bold">Даём гарантию</p><span className="text-orange text-xl font-bold">3 месяца</span>
                        </div>
                        <ComtelLink  path='/#prices' outline background='bg-orange' text='Узнать стоимость ремонта' />
                    </div>,
        'image': slide1,
    },
    {
        'content' : <div className="text-white font-mont flex flex-col gap-1 mb-5 items-start md:w-8/12">
                        <p className="text-3xl md:text-4xl lg:text-6xl font-bold mb-5">Закажите доставку <span className="text-orange">Вашего устройства</span> из дома в наш сервисный центр для быстрого и надежного ремонта!</p>
                        <ComtelLink path='/234' padding='py-4 px-20' background='bg-orange' text='Заказать доставку' />
                    </div>,
        'image': slide2,
    },
]