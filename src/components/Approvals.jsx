import React from 'react'
import '../style/approvals.css'
import ApprovalsCard from './ApprovalsCard'
import rasm1 from '../image/app1.png'
import rasm2 from '../image/app2.png'
import quyosh from '../image/quyosh.png'



function Approvals() {
    return (
        <section className='approvals'>
            <div className="container">
                <div className="approvals_contant">
                    <h4>What’s <span>new? <img src={quyosh} alt="" /></span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                    <h5>Read more on our blog <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 12H19.5" stroke="#6966FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.5 5L19.5 12L12.5 19" stroke="#6966FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </h5>
                </div>
                    <div className="approvals_grid">
                        <ApprovalsCard text="Round 9 of approvals" image={rasm1} />
                        <ApprovalsCard text="Round 8 of approvals" image={rasm2} />
                    </div>
            </div>
        </section>
    )
}

export default Approvals
