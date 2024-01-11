import { useState } from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='nav'>
      <Link to='/' className='active nav-logo'>Logo</Link>
      <div className='nav-links' style={{ display: menuOpen ? 'block' : 'none'}}>
        <Link to='/home' className='nav-link'>Home</Link>
        <Link to='/new-scavenger-hunt' className='nav-link'>New Scavenger Hunt</Link>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      
      
    </div>
  )
}