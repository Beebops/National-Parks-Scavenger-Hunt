import {useState} from 'react'
import axios from 'axios'

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      const response = await axios.post('/users/login', credentials)
      localStorage.setItem('token', response.data.token)

    } catch (err) {
      console.error('Error loggin in', err.response ? err.response.data : err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}