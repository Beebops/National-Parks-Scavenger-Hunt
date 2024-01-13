import {Link} from 'react-router-dom'

export default function Animal({animal}) {
  return (
    <Link to={`/species/${animal.species_id}`}>
      <div>
      <h3>{animal.common_name}</h3>
      <h4>{animal.scientific_name}</h4>
     
    </div>
    </Link>
    
    
  )
}