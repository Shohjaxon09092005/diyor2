import React from 'react'
import '../style/discoverHero.css'
import Discswiper from './Discswiper'

function DiscoverHero() {
  return (
    <section className='discoverHero'>
      <div className="disc_wrapper">
        <h2>Discover initiatives (RFPs)</h2>
        <p>The list below includes initial ideas that we think could make excellent Grants. This is a living list that will continue to update as ideas popup.</p>
      </div>
      <div className="disc_ul">
        <ul>
            <li>All</li>
            <li>Open</li>
            <li>Funded</li>
            <li>Completed</li>
        </ul>
      </div>
      <Discswiper />
    </section>
  )
}

export default DiscoverHero
