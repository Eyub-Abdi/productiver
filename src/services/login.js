import axios from 'axios'

export async function login(user) {
  try {
    return console.log(user)
    // return await axios.post('/api/login', { username: user.username, password: user.password })
  } catch (error) {
    console.log(error)
  }
}
