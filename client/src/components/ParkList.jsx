import ParkCard from "./ParkCard"

export default function ParkList({parks}) {
  
  return (
    <div>
      <h3>Choose a park</h3>
      {parks.map(park => (
        <ParkCard key={park.park_id} park={park} />
      ))}
   
    </div>
    
  )
}