import {useState} from 'react'
import axios from 'axios'

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if(formData.password !== formData.passwordConfirmation) {
      alert('Passwords do not match')
      return
    }
    try {
      const response = await axios.post('/users/register', {
        username: formData.username,
        email: formData.email,
        password:formData.password,
        passwordConfirmation: formData.passwordConfirmation
      })
      setFormData({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      })
    } catch (err) {
      console.error('Error registering user', err.response ? err.response.data : err);
      alert(err.response && err.response.data && err.response.data.error 
        ? err.response.data.error.message
        : "An error occurred during login.")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
      <div>
        <label>Confirm Password:</label>
          <input type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}