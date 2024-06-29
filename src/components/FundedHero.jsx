import React from 'react'
import '../style/fundedHero.css'

import rasm1 from '../image/Switch.png'
import HomeSwiperCard from './HomeSwiperCard'
import odam1 from '../image/rasm1.png'
import odam2 from '../image/rasm2.png'
import odam3 from '../image/rasm3.png'
import odam4 from '../image/rasm4.png'
import odam5 from '../image/rasm5.png'
import odam6 from '../image/rasm6.png'
import odam7 from '../image/rasm7.png'
import odam8 from '../image/rasm8.png'
import odam9 from '../image/rasm9.png'
import HomeSwiperDiv from './HomeSwiperDiv'
import FundedSwiper from './FundedSwiper'


function FundedHero() {
  return (
    <section className='fundedHero'>
      <div className="container">
        <div className="fundedHero_text">
          <h2>Funded grants</h2>
          <ul>
            <li>All</li>
            <li>Technical / Tool Development</li>
            <li>Governance</li>
            <li>Growth / Marketing</li>
            <li>Analytics</li>
            <li>Third Party Provider</li>
          </ul>
          <div className="funded_Swiper">
            <FundedSwiper />
          </div>
          <div className="funHeroImg">
            <img src={rasm1} alt="" />
            <span>Show only completed</span>
          </div>
        </div>
        <div className="funded_grid">
          <HomeSwiperCard title='Hedgie banner' span='Category' desc='They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.' img={odam1} />
          <HomeSwiperCard title='Hedgie educational content' span='Category' desc='They are mathematically consistent in the sense that no one rule would ever violate another.' img={odam2} />
          <HomeSwiperDiv text='Category' title='Hedgie educational content' description='This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then ...' rasm={odam3} />
          <HomeSwiperDiv text='Category' title='Japanese content website' description='Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a ...' rasm={odam4} />
          <HomeSwiperCard title='DGP referral program' span='Category' desc='They finally obtained a consistent description of the behavior of matter on a small scale.' img={odam5} />
          <HomeSwiperDiv text='Category' title='ETHGlobal event sponsorship' description='Because atomic behavior is so unlike ordinary experience, it is very difficult to get used to, and it appears peculiar and mysterious to everyon ...' rasm={odam6} />
          <HomeSwiperCard title='Rust SDK' span='Category' desc='At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this' img={odam7} />
          <HomeSwiperCard title='Hack for Inclusion Sponsorship' span='Category' desc='Later, however (in the beginning of the twentieth century), it was found that light did indeed sometimes behave like a particle. ' img={odam8} />
          <HomeSwiperCard title='Gitcoin Grants Round 13 sponsorship' span='Category' desc='So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience. ' img={odam9} />

        </div>
      </div>
    </section>
  )
}

export default FundedHero
