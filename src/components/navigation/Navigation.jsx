import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// ICONS
import { ImHome3 } from 'react-icons/im'
import { ImMap2 } from 'react-icons/im'
import { ImBinoculars } from 'react-icons/im'
import { ImEqualizer } from 'react-icons/im'
import { ImSpinner3 } from 'react-icons/im'
import { ImLoop2 } from 'react-icons/im'
import { ImLab } from 'react-icons/im'
import { ImExit } from 'react-icons/im'
// SCSS
import './navigation.scss'

function Navigation() {
  const navigate = useNavigate()
  const handleLogout = e => {
    e.preventDefault()
    console.log('Loggeld out...')
    navigate('/')
  }
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list-item main-nav__list-item--active">
          <NavLink to="/landing/home" className="main-nav__link">
            <ImHome3 className="main-nav__icon" />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="main-nav__list-item">
          <NavLink to="/landing/epics" className="main-nav__link">
            <ImMap2 className="main-nav__icon" />
            <span>Epics</span>
          </NavLink>
        </li>
        <li className="main-nav__list-item">
          <NavLink to="/landing/user-stories" className="main-nav__link">
            <ImBinoculars className="main-nav__icon" />
            <span>User Stories</span>
          </NavLink>
        </li>
        <li className="main-nav__list-item">
          <NavLink to="/landing/product-backlog" className="main-nav__link">
            <ImLoop2 className="main-nav__icon" />
            <span>Product Backlog</span>
          </NavLink>
        </li>
        <li className="main-nav__list-item">
          <NavLink to="/landing/sprint" className="main-nav__link">
            <ImSpinner3 className="main-nav__icon" />
            <span>Sprint</span>
          </NavLink>
        </li>
        <li className="main-nav__list-item">
          <NavLink to="/landing/sprint-logs" className="main-nav__link">
            <ImEqualizer className="main-nav__icon" />
            <span>Sprint Logs</span>
          </NavLink>
        </li>
        <li className="main-nav__list-item">
          <NavLink to="/landing/increments" className="main-nav__link">
            <ImLab className="main-nav__icon" />
            <span>Increments</span>
          </NavLink>
        </li>
      </ul>
      <div className="main-nav__logout-box">
        <button onClick={handleLogout} className="main-nav__btn ">
          <ImExit className="main-nav__icon" />
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navigation
