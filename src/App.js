import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import FlashMessage from './components/flash-message/FlashMessage'
// COMPONENTS
import Landing from './components/landing/Landing'
import Login from './components/login/Login'

function App() {
  return (
    <BrowserRouter>
      <FlashMessage />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
