import { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/nav.css'
import ModalLogout from './ModalLogout'



export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    setIsModalOpen(true)
  }

  const handleLogoutConfirm = async () => {  
    try {    
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      setIsLoggedIn(false)
    } catch (err) {
      console.error('Logout failed', err)
    }
    setIsModalOpen(false)
    navigate('/')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='nav'>
      <Link to='/' className='active nav-logo'>Logo</Link>
      <div className='nav-links' style={{ display: menuOpen ? 'block' : 'none'}}>
        {isLoggedIn && (
          <>
            <Link to='/home' className='nav-link'>Home</Link>
            <Link to='/new-scavenger-hunt' className='nav-link'>New Scavenger Hunt</Link>
          </>
        )}
        
        {isLoggedIn ? (
          <Link to='/' className='nav-link' onClick={(e) => {
            e.preventDefault()
            handleLogout()
          }}>Logout</Link>
        ) : (
          <Link to='/login' className='nav-link'>Login</Link>
        )}
        
      </div>

      <ModalLogout
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
      <button className="hamburger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  )
}