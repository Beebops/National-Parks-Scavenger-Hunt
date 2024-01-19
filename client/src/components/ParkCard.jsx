import {Link} from 'react-router-dom'
import '../styles/park-card.css'

export default function ParkCard({park}) {
  return (
    <Link to={`/parks/${park.park_id}/select-species`}>
    <div className='park-card'>
      <img className='park-card-img' src={park.park_image} alt={park.park_name}></img>
      <div className='park-card-name'>{park.park_name}</div>
    </div>
    </Link>
    
  )
}