import React from 'react'
import '../style/header.css'
import logo from '../image/HeaderLogo.png'
import { NavLink } from 'react-router-dom'
import burger from '../image/burger.png'

function Header() {
  function openModal() {
    document.querySelector(".menu_ul").classList.add("show")
  }

  function closeModal() {
    document.querySelector(".menu_ul").classList.remove("show")
  }
  return (
    < header className='header' >
      <div className="header_wrapper">
        <NavLink to="/"><img src={logo} alt="" /></NavLink>

        <ul>
          <div className="ul_wrappper">
            <li><NavLink to="/discover">Discover initiatives</NavLink></li>
            <li><NavLink to="/funded">Funded grants</NavLink></li>
            <li>Program expenses</li>
            <li>Blog</li>
            <li>FAQ</li>
            <button>Apply for grant</button>
          </div>
        </ul>
        <div className="Menu">
          <div className="menu">
            <button>Apply</button>
            <img className='burger' onClick={openModal} src={burger} alt="" />
          </div>
          <div className="menu_ul">
            <button className='button' onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <ul>
              <li><NavLink to="/discover">Discover initiatives</NavLink></li>
              <li><NavLink to="/funded">Funded grants</NavLink></li>
              <li>Program expenses</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header
