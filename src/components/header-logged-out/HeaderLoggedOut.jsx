import React, { useEffect } from 'react'
import './header-logged-out.scss'
import Form from '../form/Form'

function HeaderLoggedOut() {
  return (
    <header className="header header--logged-out u-margin-bottom--medium">
      <div className="header--logged-in__logo">
        <span className="header--logged-in__label">Productiver</span>
      </div>
      <Form />
    </header>
  )
}

export default HeaderLoggedOut
