import Animal from './Animal'
import { Link } from 'react-router-dom'

export default function AnimalList({species}) {
  return (
    <div>
      <h3>Animal List</h3>
      <ul>
        {species.map(animal => (
          <div>
            <Link to={`/species/${animal.species_id}`}><Animal key={animal.species_id} animal={animal} />
              
            </Link>
          </div>
        ))}
      </ul>

    
    </div>
    
  )
}