import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/effect-overflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import slide_image_1 from '../assets/images/imagecarousel.png';

const CarouselSwiper = () => {
    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev ">
                        <NavigateNextIcon name="arrow-back-outline"></NavigateNextIcon>
                    </div>
                    <div className="swiper-button-next ">
                        <NavigateNextIcon name="arrow-forward-outline"></NavigateNextIcon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default CarouselSwiper;
