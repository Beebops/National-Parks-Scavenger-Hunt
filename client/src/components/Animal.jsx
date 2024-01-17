import {Link} from 'react-router-dom'

export default function Animal({animal}) {
  return (
    <Link to={`/species/species-details/${animal.species_id}`}>
      <div>
      <h3>{animal.common_name.split(',')[0]}</h3>

      <p>({animal.scientific_name})</p>
     
    </div>
    </Link>  
  )
}