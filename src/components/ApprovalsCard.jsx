import React from 'react'

function ApprovalsCard({ image, text }) {
    return (
        <div className='approvalsCard'>
            <img src={image} alt="" />
            <div className="app_content">
                <span>Funding round</span>
                <h5>{text}</h5>
                <span>January 1, 2022</span>
            </div>
        </div>
    )
}

export default ApprovalsCard
