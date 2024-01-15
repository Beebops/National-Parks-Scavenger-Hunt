export default function SelectedSpeciesList({ selectedSpecies }) {
  
  return (
    <div>
      <h3>Selected Species</h3>
      <ul>
      {Object.entries(selectedSpecies).flatMap(([category, speciesList]) => 
          speciesList.map(species => (
            <li key={species.speciesId}>
              {species.commonName.split(',')[0]} ({species.scientificName})
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
