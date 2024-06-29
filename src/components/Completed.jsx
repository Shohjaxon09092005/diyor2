import React from 'react'

function Completed({ title, text, span, btnText,rasm }) {
  return (
    <div className='discBannerCard'>
      <div className="discBanCard_cont">
        <h4>{title}</h4>
        <p>{text}</p>
        <h6>Funding amount: <span>{span}</span></h6>
      </div>
      <div className="completed_Btn">
        <button className='completed'>{btnText}<img src={rasm} alt="" /></button>
      </div>
    </div>
  )
}

export default Completed


