import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import CategorySelect from './CategorySelect'
import SelectedSpeciesList from './SelectedSpeciesList';

export default function SpeciesSelector() {
  const {parkId} = useParams()
  const [species, setSpecies] = useState({mammals: [], birds: [], reptiles: [], amphibians: [], fish: []})
  const [selectedSpecies, setSelectedSpecies] = useState({mammals: [], birds: [], reptiles: [], amphibians: [], fish: []})

  const userId = localStorage.getItem('userId');

  
  useEffect(() => {
    const fetchSpecies = async () => {
    const categories = ['mammals', 'birds', 'reptiles', 'amphibians', 'fish']
    for (const category of categories) {
      try {
        const response = await axios.get(`/parks/${parkId}/species/${category}`)
        setSpecies(prev => ({...prev, [category]: response.data}))
      } catch (err) {
        console.error(`Error fetching ${category}:`, err);
      }    
    }  
    }
    if(parkId) {
      fetchSpecies()
    }
    
  }, [parkId])
  
  const handleSpeciesSelect = (category, selectedIds) => {
    setSelectedSpecies(prev => {
      // Create a set for the IDs for easier addition/removal
      const selectedSet = new Set(prev[category].map(s => s.speciesId));
  
      // Update the set based on the latest selection
      selectedIds.forEach(id => {
        // If the ID is already in the set, remove it (deselecting)
        if (selectedSet.has(id)) {
          selectedSet.delete(id);
        } else {
          // If the ID is not in the set, add it (selecting)
          selectedSet.add(id);
        }
      });
  
      // Map the updated set of IDs back to the species objects
      const updatedSelection = Array.from(selectedSet).map(id => {
        const speciesObj = species[category].find(species => species.species_id === parseInt(id));
        return speciesObj ? {
          speciesId: speciesObj.species_id,
          commonName: speciesObj.common_name,
          scientificName: speciesObj.scientific_name
        } : null;
      }).filter(item => item !== null);
  
      // Update the state with the new selection
      return {
        ...prev,
        [category]: updatedSelection
      };
    });
  };
  
  
  
  
  
  return (
    <div>
      <label htmlFor="new-hunt-title">Title your scavenger hunt</label>
      <input id="new-hunt-title" type="text" />
      <CategorySelect category="mammals" onSpeciesSelect={handleSpeciesSelect} speciesList={species.mammals} />
      <CategorySelect category="birds" onSpeciesSelect={handleSpeciesSelect} speciesList={species.birds} />
      <CategorySelect category="reptiles" onSpeciesSelect={handleSpeciesSelect} speciesList={species.reptiles} />
      <CategorySelect category="amphibians" onSpeciesSelect={handleSpeciesSelect} speciesList={species.amphibians} />
      <CategorySelect category="fish" onSpeciesSelect={handleSpeciesSelect} speciesList={species.fish} />
      <SelectedSpeciesList selectedSpecies={selectedSpecies} />
      <button>Create Hunt</button>

    </div>
  );
}




// const handleSpeciesSelect = (category, selectedOptions) => {
//   setSelectedSpecies(prev => {
//     const currentSelection = prev[category] || [];

//     const newSelection = selectedOptions.reduce((acc, option) => {
//       const speciesObj = species[category].find(species => species.species_id === option.value);
//       if (acc.find(item => item.species_id === speciesObj.species_id)) {
//         return acc.filter(item => item.species_id !== speciesObj.species_id);
//       } else {
//         return [...acc, speciesObj];
//       }
//     }, currentSelection);

//     return {
//       ...prev,
//       [category]: newSelection
//     };
//   });
// };



