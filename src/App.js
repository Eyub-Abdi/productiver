import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import FlashMessage from './components/flash-message/FlashMessage'
// COMPONENTS
import Landing from './components/landing/Landing'
import Login from './components/login/Login'
import NotFound from './components/not-found/NotFound'

function App() {
  return (
    <BrowserRouter>
      <FlashMessage />
      <Routes>
        <Route path="/landing/*" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
