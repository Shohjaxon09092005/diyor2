import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeSwiper from '../components/HomeSwiper'
import Approvals from '../components/Approvals'
import Question from '../components/Question'
import Process from '../components/Process'


function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeSwiper />
      <Approvals />
      <Question />
      <Process />
    </main>
  )
}

export default HomePage
