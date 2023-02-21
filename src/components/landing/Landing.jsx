import React, { useEffect } from 'react'
import './landing.scss'
// COMPONENTS
import Header from '../header/Header'
import Main from '../content/Main'
import Navigation from '../navigation/Navigation'

function Landing() {
  return (
    <div className="landing">
      <Header />
      <Navigation />
      <Main />
    </div>
  )
}

export default Landing
