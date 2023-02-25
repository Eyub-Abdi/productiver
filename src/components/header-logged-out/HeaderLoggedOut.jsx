import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'
import './header-logged-out.scss'
// COMPONENTS
import Form from '../form/Form'
import FormInput from '../form-input/FormInput'

function HeaderLoggedOut() {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(1).max(20).required()
  })
  const users = [
    { id: 1, name: 'Myungsoon', password: '1234' },
    { id: 2, name: 'Ayub Abdi', password: '123' },
    { id: 3, name: 'Juway', password: '12' }
  ]
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    const results = schema.validdate(username)
    console.log(results)
    // Login logic
    // Chek username if exist
    const user = users.find(user => user.name === username && user.password === password)
    if (!user) return console.log('Invalid username or password')

    // if not return error ivalid username or password
    // Take the user
    console.log(`Logged in as ${username} with ${password} as your password `)
    // navigate('/landing/home')
  }
  return (
    <header className="header header--logged-out u-margin-bottom--medium">
      <div className="header--logged-in__logo">
        <span className="header--logged-in__label">Productiver</span>
      </div>
      <Form>
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
