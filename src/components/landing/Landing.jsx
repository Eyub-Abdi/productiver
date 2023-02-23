import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './landing.scss'
// COMPONENTS
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import Home from '../home/Home'
import Epic from '../epic/Epic'
import ProductBacklog from '../product-backlog/ProductBacklog'
import UserStories from '../user-stories/UserStories'
import Sprint from '../sprint/Sprint'
import SprintLogs from '../sprint-logs/SprintLogs'
import Increments from '../increments/Increments'
import NotFound from '../not-found/NotFound'

function Landing() {
  return (
    <div className="landing">
      <Header />
      <Navigation />
      <main className="main">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="epics" element={<Epic />} />
          <Route path="user-stories" element={<UserStories />} />
          <Route path="product-backlog" element={<ProductBacklog />} />
          <Route path="sprint" element={<Sprint />} />
          <Route path="sprint-logs" element={<SprintLogs />} />
          <Route path="increments" element={<Increments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default Landing
