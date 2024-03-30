import {Swiper, SwiperSlide} from "swiper/react";
import {sliderData} from "../data/sliderData.tsx";
import {Navigation, Pagination} from "swiper/modules";
import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <Swiper className="h-svh lg:h-[92vh]"
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
        >
            {
                sliderData.map(slide => (
                    <SwiperSlide>
                        <figure>
                            <figcaption
                                className="flex flex-col justify-center items-center h-svh w-screen lg:h-[92vh] px-4 lg:px-0 relative">
                                <img className="absolute -z-10 w-full h-full object-cover" src={slide.image} alt=""/>
                                {slide.content}
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Slider;