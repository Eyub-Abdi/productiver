import React, { useEffect } from 'react'
import HeaderLoggedOut from '../header-logged-out/HeaderLoggedOut'
import Page from '../page/Page'
import './home-guest.scss'

function HomeGuest() {
  return (
    <Page title="Create Account">
      <div className="home-guest">
        <HeaderLoggedOut />
        <h1>Home Guest</h1>
      </div>
    </Page>
  )
}

export default HomeGuest
