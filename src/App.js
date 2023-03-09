import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import { useImmerReducer } from 'use-immer'

// COMPONENTS
import FlashMessage from './components/flash-message/FlashMessage'
import Landing from './components/landing/Landing'
import HomeGuest from './components/home-guest/HomeGuest'
import NotFound from './components/not-found/NotFound'
// CONTEXTS
import StateContext from './components/contexts/StateContext'
import DispatchContex from './components/contexts/DispatchContext'
import { login } from './services/login'

function App() {
  const initialState = {
    name: 'niite mimi',
    isLoggedIn: true,
    flashMessages: [],
    inputErrors: {
      message: []
    },
    scrum: { createList: false }
  }

  function reducer(draft, action) {
    switch (action.type) {
      case 'FlashMessage':
        draft.flashMessages.push(action.value)
        return
      case 'InputError':
        draft.inputErrors.message.push(action.value)
        return

      case 'createList':
        draft.scrum.createList = !draft.scrum.createList
        return
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  useEffect(() => {}, [state.scrum.createList])

  return (
    <StateContext.Provider value={state}>
      <DispatchContex.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessage messages={state.flashMessages} />
          <Routes>
            <Route path="/landing/*" element={<Landing />} />
            <Route path="/" element={<HomeGuest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DispatchContex.Provider>
    </StateContext.Provider>
  )
}

export default App
