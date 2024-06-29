import React from 'react'
import '../style/process.css'
import SectionNav from './SectionNav'
import tagchizq from '../image/tagchizq.png'
import img1 from '../image/Right.png'
import img2 from '../image/left.png'


function Process() {
  return (
    <section className='process'>
      <div className="container">
        <SectionNav span="process" span1="Application" title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.' photo={tagchizq}/>


        <div className="process_cards">
           <div className="process_card">
            <h4>1</h4>
            <h3>Apply</h3>
            <p>Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background. </p>
           </div>
           <img className=' strelka1' src={img1} alt="" />
           <span></span>
           <div className="process_card">
            <h4>2</h4>
            <h3>Interview</h3>
            <p>If your application is selected, the dYdX Grants will conduct 1-2 interviews to collect more information on the Applicant's background and the proposal. </p>
           </div>
           <img className='strelka2' src={img2} alt="" />
           <div className="process_card">
            <h4>3</h4>
            <h3>Grant offer</h3>
            <p>The dYdX Grants team will determine if the proposal fits into the grant program. A vesting schedule and timeline for product development reports will also be determined in the offer; </p>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Process
