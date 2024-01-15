import {Link} from 'react-router-dom'

export default function ParkCard({park}) {
  return (
    <Link to={`/parks/${park.park_id}/select-species`}>
    <div>
      <img src={park.park_image} alt={park.park_name}></img>
      <div>{park.park_name}</div>
    </div>
    </Link>
    
  )
}