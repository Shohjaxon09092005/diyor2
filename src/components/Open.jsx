import React from 'react'

function Open({ title, text, span, btnText}) {
    return (
        <div className='discBannerCard'>
            <div className="discBanCard_cont">
                <h4>{title}</h4>
                <p>{text}</p>
                <h6>Funding amount: <span>{span}</span></h6>
            </div>
            <div className="open_Btn">
                <button>{btnText}</button>
            </div>
        </div>
    )
}

export default Open
