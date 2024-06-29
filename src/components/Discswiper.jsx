import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Discswiper() {
    return (
        <div className='discSwiper'>
            <Swiper
                navigation={true} modules={[Navigation]}
                loop={true}
                slidesPerView={3}
                spaceBetween={50}

                className="mySwiper"
            >
                <SwiperSlide className='SwiperSlide'>All</SwiperSlide>
                <SwiperSlide className='SwiperSlide'>Open</SwiperSlide>
                <SwiperSlide className='SwiperSlide'>Funded</SwiperSlide>
                <SwiperSlide className='SwiperSlide'>Completed</SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Discswiper
