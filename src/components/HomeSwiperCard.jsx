import React from 'react'
import '../style/homeSwiperCard.css'

function HomeSwiperCard({ span, title, desc, img, }) {
    return (
        <div className='homeSwiperCard'>
            <div className="homeSwi_content">
                <h6>{span}</h6>
                <h4>{title}</h4>
                <h6>Funding amount: $5,000 - $6,000</h6>
                <p>{desc}</p>
            </div>
            <div className="homeSwi_img">
                <img className='image' src={img} alt="" />
            </div>
        </div>
    )
}

export default HomeSwiperCard
