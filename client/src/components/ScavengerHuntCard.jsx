import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

import '../styles/scavengerhuntcard.css'

export default function ScavengerHuntCard({hunt}) {
  
  return (
    <Link to={`/users/${hunt.user_id}/hunts/${hunt.hunt_id}`}>
      <div className='scavenger-hunt-card' style={{ backgroundColor: hunt.is_complete ? 'mediumseagreen' : 'saddlebrown'}}>
        <img className='scavenger-hunt-image' src={hunt.park_image} alt={hunt.hunt_title}></img>
        <div className='scavenger-hunt-title-container'>
          <h3 className='scavenger-hunt-title'>{hunt.hunt_title}</h3>
          
          <FontAwesomeIcon icon={faSquareCheck} className='scavenger-hunt-check' style={{ display: hunt.is_complete ? 'block' : 'none'}}></FontAwesomeIcon>
        
        </div>
        
        
      </div>
    </Link>  
  )
}