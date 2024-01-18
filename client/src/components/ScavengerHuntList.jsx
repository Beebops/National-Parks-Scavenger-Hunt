import ScavengerHuntCard from "./ScavengerHuntCard"
import {Link} from 'react-router-dom'

export default function ScavengerHuntList({hunts}) {
  
  return (
    <div>
      <h2>Scavenger Hunts</h2>
      <ul>
        {hunts.map(hunt => (
          <li key={hunt.hunt_id}>
            {/* <Link to={`/hunts/${hunt.hunt_id}`}> */}
              <ScavengerHuntCard hunt={hunt} />
            {/* </Link> */}
          </li>
        ))}
      </ul>
            
    </div>
    

  )
}