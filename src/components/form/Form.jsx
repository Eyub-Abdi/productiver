import React, { useEffect } from 'react'
import FormInput from '../form-input/FormInput'
import './form.scss'

function Form({ classes }) {
  return (
    <div className="form-box">
      <form className={`form ${classes}`}>
        <FormInput type="text" classes={'login-form'} placeholder={'Username'} />
        <FormInput type="password" classes={'login-form'} placeholder={'Password'} />
        <button className="btn btn--small btn--green btn--login">Login</button>
      </form>
    </div>
  )
}

export default Form
