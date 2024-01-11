import AnimalList from "./AnimalList"
import ParkImage from "./ParkImage"

export default function ScavengerHunt() {
  return (
    <div>
      <ParkImage />
      <h2>Title Of Scavenger Hunt</h2>
      <p>Date Created</p>
      <p>Completed:</p>
      <AnimalList />
    </div>
    
  )
}