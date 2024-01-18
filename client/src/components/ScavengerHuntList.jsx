import ScavengerHuntCard from "./ScavengerHuntCard"
import '../styles/scavengerhuntlist.css'

export default function ScavengerHuntList({hunts}) {
  
  return (
      <ul className="scavenger-hunt-list">
        {hunts.map(hunt => (
          <li className="scavenger-hunt-li" key={hunt.hunt_id}>
           
              <ScavengerHuntCard hunt={hunt} />
            
          </li>
        ))}
      </ul>
  )
}