import { useState } from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='nav'>
      <Link to='/' className='active'>Logo</Link>
      <div id='nav-links' style={{ display: menuOpen ? 'block' : 'none'}}>
        <Link to='/home'>Home</Link>
        <Link to='/new-scavenger-hunt'>New Scavenger Hunt</Link>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      
      
    </div>
  )
}