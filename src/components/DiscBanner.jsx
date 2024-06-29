import React from 'react'
import '../style/discBanner.css'
import DiscBannerCard from './DiscBannerCard'
import ptichka from '../image/ptichka.svg'
import Completed from './Completed'
import Open from './Open'

function DiscBanner() {
  return (
    <section className='discBanner'>
      <DiscBannerCard title='Funding Rate Page' text='Page that provides a live look at all funding rates with popular timeframes in annualized format' span='$45,000 - $85,000' btnText='Funded' />
      <DiscBannerCard title='CLI Trading Tool' text='Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal' span='$25,000 - $40,000' btnText='Funded' />
      <Open title='New Language SDKs' text='Replicate existing Python SDK to new programming languages with all the same features' span='$25,000 - $40,000' btnText='Open' />
      <Completed title='Liquidation Alert Tool' text='Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal' span='$30,000 - $50,000' btnText='Completed' rasm={ptichka} />
      <DiscBannerCard title='Delegation Tool' text='Webpage to allow active participants to market their voting and enable direct delegation from DYDX holders'
        span='$15,000 - $30,000' btnText='Funded' />
      <DiscBannerCard title='Newsletter' text='Weekly or Monthly newsletters promoting and educating the dYdX platform'
        span='$10,000 - $20,000' btnText='Funded' />
      <DiscBannerCard title='Academy Contributions' text='Webpages, Courses, Glossaries and Youtube libraries educating new users on dYdX'
        span='$10,000 - $25,000' btnText='Funded' />
      <Open title='Discord bots' text='Additional Discord bots that notify members of activity on dYdX and governance' span='$5,000 - $10,000' btnText='Open' />
      <DiscBannerCard title='Reward tracking & Simulator' text='Page or tool that allows traders to calculate future rewards and simulate earnings from activity'
        span='$20,000 - $30,000' btnText='Funded' />
    </section>
  )
}

export default DiscBanner
