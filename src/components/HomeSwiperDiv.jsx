import React from 'react'
import '../style/homeSwiperDiv.css'

function HomeSwiperDiv({ text, title, description, rasm }) {
    return (
        <div className='homeSwiperDiv'>
            <div className="div">

            </div>
            <div className="content">
                <div className="homeSwiDiv_c">
                    <h6>{text}</h6>
                    <h4>{title}</h4>
                    <h6>Funding amount: $5,000 - $6,000</h6>
                    <p>{description}</p>
                </div>
                <div className="<homeSwiDiv_img>">
                    <img src={rasm} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeSwiperDiv
