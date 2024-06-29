import React from 'react'
import '../style/homeHero.css'
import chiziq1 from '../image/1.png'

function HomeHero() {
    return (
        <section className='homeHero'>
            <div className="container">
                <div className="homeHero_wrapper">
                    <h1>Powering the future of dYdX through community <span>grants<img src={chiziq1} alt="" /></span></h1>
                </div>
                <div className="homeHero_btn">
                    <button>Discover RFPs</button>
                    <button>Apply for grant</button>
                </div>
                <div className="homeHero_text">
                    <div className="homeHero_card">
                        <h4>100+ </h4>
                        <p>projects funded</p>
                    </div>
                    <div className="homeHero_card">
                        <h4>$3+ milion </h4>
                        <p>awarded</p>
                    </div>
                    <div className="homeHero_card">
                        <h4>400+ </h4>
                        <p>projects funded</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero
