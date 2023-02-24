import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../form-input/FormInput'
import Form from '../form/Form'
import HeaderLoggedOut from '../header-logged-out/HeaderLoggedOut'
import Page from '../page/Page'
import './home-guest.scss'

function HomeGuest() {
  const navigate = useNavigate()

  const handleRegistration = e => {
    e.preventDefault()
    console.log('User registered..')
    navigate('/landing/home')
  }
  return (
    <Page title="Create Account">
      <div className="home-guest">
        <HeaderLoggedOut />
        <div className="guest-room">
          <div className="guest-room__text">
            <h2 className="heading-primary">Time to try Productiver!</h2>
            <p className="paragraph">Productiver is an efficient project management system that helps teams accomplish more in less time. It is user-friendly and easy to use, making it accessible to all team members.</p>
          </div>

          <div className="guest-room__join">
            <h3 className="heading-tertiary">Welcome!</h3>
            <div className="register-box">
              <Form classes={'u-flex-d-column u-gap-medium'}>
                <FormInput classes={'register--input'} type={'text'} placeholder={'Full Name'} />
                <FormInput classes={'register--input'} type={'email'} placeholder={'Email Address'} />
                <FormInput classes={'register--input'} type={'password'} placeholder={'Password'} />
                <button onClick={handleRegistration} className="btn btn--small btn--green btn--register">
                  Register
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HomeGuest
