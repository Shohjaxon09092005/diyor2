import React from 'react'
import '../style/sectionNav.css'

function SectionNav({span, rasm, title, photo,span1 }) {
    return (
        <div className='sectionNav'>
            <h4> {span1} <span> {span} <img src={rasm} alt="" /> <img className='immm' src={photo} alt="" /></span></h4>
            <p>{title}</p>
        </div>
    )
}

export default SectionNav
