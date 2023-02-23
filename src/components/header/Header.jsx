import React, { useEffect } from 'react'
// ICONS
import { ImSearch } from 'react-icons/im'
import { ImClock } from 'react-icons/im'
import { ImBell } from 'react-icons/im'
import Search from '../search/Search'
// SCSS
import './header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__label">Productiver/</span>
        <span className="header__campany">Faharisoft</span>
      </div>
      <Search />
      <menu className="header__menu">
        <ImSearch className="header__menu-icon" id="search" />
        <ImClock className="header__menu-icon" />
        <ImBell className="header__menu-icon"></ImBell>
        <span className="badge-notification">9+</span>
        <figure className="heeder__user-profile">
          <figcaption>username</figcaption>
        </figure>
      </menu>
    </header>
  )
}

export default Header
