import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

import '../styles/scavengerhuntcard.css'

export default function ScavengerHuntCard({hunt}) {
  console.log(hunt)
  return (
    <Link to={`/users/${hunt.user_id}/hunts/${hunt.hunt_id}`}>
      <div className='scavenger-hunt-card'>
        <img className='scavenger-hunt-image' src={hunt.park_image} alt={hunt.hunt_title}></img>
        
        <h3 className='scavenger-hunt-title'>{hunt.hunt_title}</h3>
        <icon className='scavenger-hunt-check' style={{ display: hunt.is_complete ? 'block' : 'none'}}>
          <FontAwesomeIcon icon={faSquareCheck} />
        </icon>
        
      </div>
    </Link>  
  )
}