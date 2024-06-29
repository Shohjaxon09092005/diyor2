import React from 'react'
import '../style/question.css'
import SectionNav from './SectionNav'
import rasm1 from '../image/doira.png'
import plus from '../image/plus.png'

function Question() {
    return (
        <section className='question'>
            <div className="container">
                <SectionNav rasm={rasm1} span="questions" span1="Frequently asked " title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero." />

                <div className="question_wrapper">
                    <ul>
                        <li>How do I apply? <img src={plus} alt="" /></li>
                        <li>Can I apply as a U.S. based person/company? <img src={plus} alt="" /></li>
                        <li>How will I be compensated? <img src={plus} alt="" /></li>
                        <li>What type of project will qualify for a Grant? <img src={plus} alt="" /></li>
                        <li>What is the application timeline? When can I expect to hear back? <img src={plus} alt="" /></li>
                        <li>How can I increase my chances of getting funded? <img src={plus} alt="" /></li>
                        <li>How often do you approve new Rounds of funding? <img src={plus} alt="" /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Question
