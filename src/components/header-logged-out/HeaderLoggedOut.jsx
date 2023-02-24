import React, { useEffect } from 'react'
import './header-logged-out.scss'
import Form from '../form/Form'
import FormInput from '../form-input/FormInput'

function HeaderLoggedOut() {
  return (
    <header className="header header--logged-out u-margin-bottom--medium">
      <div className="header--logged-in__logo">
        <span className="header--logged-in__label">Productiver</span>
      </div>
      <Form>
        <FormInput type="text" classes={'login-form'} placeholder={'Username'} />
        <FormInput type="password" classes={'login-form'} placeholder={'Password'} />
        <button className="btn btn--small btn--green btn--login">Login</button>
      </Form>
    </header>
  )
}

export default HeaderLoggedOut
