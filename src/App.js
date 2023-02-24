import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import FlashMessage from './components/flash-message/FlashMessage'
// COMPONENTS
import Landing from './components/landing/Landing'
import HomeGuest from './components/home-guest/HomeGuest'
import NotFound from './components/not-found/NotFound'

function App() {
  return (
    <BrowserRouter>
      <FlashMessage />
      <Routes>
        <Route path="/landing/*" element={<Landing />} />
        <Route path="/" element={<HomeGuest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
