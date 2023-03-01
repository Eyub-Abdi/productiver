import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'
import './header-logged-out.scss'
// COMPONENTS
import Form from '../form/Form'
import FormInput from '../form-input/FormInput'
import ViewInputError from '../view-input-errors/ViewInputError'
// CONTEXTS
import StateContext from '../contexts/StateContext'
import DispatchContext from '../contexts/DispatchContext'

function HeaderLoggedOut() {
  const { inputErrors } = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(1).max(20).required()
  })
  const users = [
    { id: 1, name: 'myungsoon', password: '1234' },
    { id: 2, name: 'Ayub Abdi', password: '123' },
    { id: 3, name: 'Jane', password: '12' }
  ]
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    const { error } = schema.validate({ username, password })
    if (error) return appDispatch({ type: 'InputError', value: error.details[0].message })
    // Login logic
    // Chek username if exist
    const user = users.find(user => user.name === username && user.password === password)
    if (!user) return appDispatch({ type: 'InputError', value: 'Invalid username or password' })

    // if not return error ivalid username or password
    // Take the user
    // console.log(`Logged in as ${username} with ${password} as your password `)
    // navigate('/landing/home')
    appDispatch({ type: 'FlashMessage', value: `You are logged in as ${username}` })
  }
  return (
    <header className="header header--logged-out u-margin-bottom--medium">
      <div className="header--logged-in__logo">
        <span className="header--logged-in__label">Productiver</span>
      </div>
      <Form>
        {inputErrors.message.length ? <ViewInputError errorMessage={inputErrors.message[inputErrors.message.length - 1]} /> : ''}

        <FormInput onChange={e => setUsername(e.target.value)} value={username} type="text" classes={'login-form'} placeholder={'Username'} />
        <FormInput onChange={e => setPassword(e.target.value)} value={password} type="password" classes={'login-form'} placeholder={'Password'} />
        <button onClick={handleLogin} className="btn btn--small btn--green btn--login">
          Login
        </button>
      </Form>
    </header>
  )
}

export default HeaderLoggedOut
