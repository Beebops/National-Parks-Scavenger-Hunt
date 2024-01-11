import ScavengerHuntCard from "./ScavengerHuntCard"
import {Link} from 'react-router-dom'

export default function ScavengerHuntList() {
  return (
    <div>
      <h2>Scavenger Hunts</h2>
      <Link to='/scavenger-hunt'><ScavengerHuntCard /></Link>
      <Link to='/scavenger-hunt'><ScavengerHuntCard /></Link>
      
      
    </div>
    

  )
}