import Animal from './Animal'

import '../styles/animal-list.css'

export default function AnimalList({species, onDeleteSpecies, onUpdateFoundStatus}) {
 
  
  return (  
      <ul className='animal-list'>
        {species.map(animal => (
          <li className='animal-list-item'>
            <Animal key={animal.species_id} animal={animal} onDelete={onDeleteSpecies}
            onUpdateFoundStatus={onUpdateFoundStatus} />
          </li>
        ))}
      </ul>    
  )
}