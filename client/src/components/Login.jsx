import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })
  const navigate = useNavigate()


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
      localStorage.setItem('userId', response.data.userId)
      navigate('/home')
    } catch (err) {
      console.error('Error loggin in', err.response ? err.response.data : err)
      console.log(err)
      alert(err.response && err.response.data && err.response.data.error 
        ? err.response.data.error.message
        : "An error occurred during login.")
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