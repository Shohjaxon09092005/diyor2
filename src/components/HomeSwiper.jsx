import React from 'react'
import '../style/homeSwiper.css'

import rasm from '../image/chiziqPasga.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import HomeSwiperCard from './HomeSwiperCard';
import rasm1 from '../image/card1.png'
import rasm2 from '../image/card3.png'
import rasm3 from '../image/card2.png'
import rasm4 from '../image/card4.png'



import HomeSwiperDiv from './HomeSwiperDiv';



function HomeSwiper() {
    return (
        <section className='homeSwiper'>
            <div className="container">
                <div className="homeSwiper_img">
                    <img src={rasm} alt="" />
                </div>
                <h3>Projects built with grants</h3>
                <p className='salomat'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                <div className="homeSwiper_Span">
                    <span> View all funded projects <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 12H19.5" stroke="#6966FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.5 5L19.5 12L12.5 19" stroke="#6966FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></span>
                </div>

                <div className="homeSwiper_wrapper">
                    <Swiper
                        navigation={true} modules={[Navigation]}
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={60}

                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <HomeSwiperCard span="Crowdfund" title="Funding rates page" desc="Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access." img={rasm1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeSwiperDiv text="Edition" title="Tradingview integration" description="The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different ..." rasm={rasm4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeSwiperCard span="Entry" title="Rewards optimization research and paper" desc="The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership." img={rasm3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeSwiperCard span="Crowdfund" title="DAO Organizational Structure Research" desc="The grant will be used to fund a deep dive research report around historical and existing DAO structures with guidance around successful best practices. Topics will include organization structure, reporting & accountability, contributors, funding, and more."  img={rasm2}/>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="ota">
                <Swiper
                        navigation={true} modules={[Navigation]}
                        loop={true}
                        slidesPerView={2}
                        spaceBetween={60}

                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <HomeSwiperCard span="Crowdfund" title="Funding rates page" desc="Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access." img={rasm1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeSwiperDiv text="Edition" title="Tradingview integration" description="The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different ..." rasm={rasm4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeSwiperCard span="Entry" title="Rewards optimization research and paper" desc="The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership." img={rasm3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeSwiperCard span="Crowdfund" title="DAO Organizational Structure Research" desc="The grant will be used to fund a deep dive research report around historical and existing DAO structures with guidance around successful best practices. Topics will include organization structure, reporting & accountability, contributors, funding, and more."  img={rasm2}/>
                        </SwiperSlide>

                    </Swiper>
                </div>
                 <div className="ona">
                 <Swiper
                        navigation={true} modules={[Navigation]}
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={60}

                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <HomeSwiperCard span="Crowdfund" title="Funding rates page" desc="Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access." img={rasm1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeSwiperDiv text="Edition" title="Tradingview integration" description="The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different ..." rasm={rasm4}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeSwiperCard span="Entry" title="Rewards optimization research and paper" desc="The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership." img={rasm3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeSwiperCard span="Crowdfund" title="DAO Organizational Structure Research" desc="The grant will be used to fund a deep dive research report around historical and existing DAO structures with guidance around successful best practices. Topics will include organization structure, reporting & accountability, contributors, funding, and more."  img={rasm2}/>
                        </SwiperSlide>

                    </Swiper>
                 </div>
            </div>
        </section>
    )
}

export default HomeSwiper
