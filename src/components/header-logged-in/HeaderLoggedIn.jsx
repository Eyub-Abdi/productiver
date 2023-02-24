import React, { useEffect } from 'react'
// ICONS
import { ImSearch } from 'react-icons/im'
import { ImClock } from 'react-icons/im'
import { ImBell } from 'react-icons/im'
import Search from '../search/Search'
// SCSS
import './header-logged-in.scss'

function HeaderLoggedIn() {
  return (
    <header className="header header--logged-in">
      <div className="header--logged-in__logo">
        <span className="header--logged-in__label">Productiver/</span>
        <span className="header--logged-in__campany">Faharisoft</span>
      </div>
      <Search />
      <menu className="header--logged-in__menu">
        <ImSearch className="header--logged-in__menu-icon" id="search" />
        <ImClock className="header--logged-in__menu-icon" />
        <ImBell className="header--logged-in__menu-icon"></ImBell>
        <span className="badge-notification">9+</span>
        <figure className="heeder--logged-in__user-profile">
          <figcaption>username</figcaption>
        </figure>
      </menu>
    </header>
  )
}

export default HeaderLoggedIn
