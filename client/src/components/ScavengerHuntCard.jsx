import {Link} from 'react-router-dom'
import '../styles/scavengerhuntcard.css'

export default function ScavengerHuntCard({hunt}) {
  
  return (
    <Link to={`/users/${hunt.user_id}/hunts/${hunt.hunt_id}`}>
      <div>
        <h3>{hunt.hunt_title}</h3>
        <img src={hunt.park_image} alt=''></img>
      </div>
    </Link>  
  )
}