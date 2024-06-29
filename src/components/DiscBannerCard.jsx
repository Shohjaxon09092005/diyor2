import React from 'react'

function DiscBannerCard({ title, text, span, btnText,rasm }) {
  return (
    <div className='discBannerCard'>
      <div className="discBanCard_cont">
        <h4>{title}</h4>
        <p>{text}</p>
        <h6>Funding amount: <span>{span}</span></h6>
      </div>
      <div className="disc_Btn">
        <button>{btnText}<img src={rasm} alt="" /></button>
      </div>
    </div>
  )
}

export default DiscBannerCard

