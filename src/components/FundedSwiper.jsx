import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function FundedSwiper() {
  return (
    <div>
      <Swiper
              navigation={true} modules={[Navigation]}
              loop={true}
              slidesPerView={2}
              spaceBetween={0}

              className="mySwiper"
            >
              <SwiperSlide className='SwiperSlide'>All</SwiperSlide>
              <SwiperSlide className='SwiperSlide'>Technical / Tool Development</SwiperSlide>
              <SwiperSlide className='SwiperSlide'>Governance</SwiperSlide>
              <SwiperSlide className='SwiperSlide'>Growth / Marketing</SwiperSlide>
              <SwiperSlide className='SwiperSlide'>Analytics</SwiperSlide>
              <SwiperSlide className='SwiperSlide'>Third Party Provider</SwiperSlide>
            </Swiper>
    </div>
  )
}

export default FundedSwiper

