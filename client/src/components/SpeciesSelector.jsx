import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import CategorySelect from './CategorySelect'
import SelectedSpeciesList from './SelectedSpeciesList';

export default function SpeciesSelector() {
  const {parkId} = useParams()
  const [huntTitle, setHuntTitle] = useState('')
  const [species, setSpecies] = useState({mammals: [], birds: [], reptiles: [], amphibians: [], fish: []})
  const [selectedSpecies, setSelectedSpecies] = useState({mammals: [], birds: [], reptiles: [], amphibians: [], fish: []})

  const handleChange = e => {
    console.log(e.target.value)
    setHuntTitle(e.target.value)
  }

  const userId = localStorage.getItem('userId');

  // selectedSpecies {mammals: [{speciesId: 7662, commonName: 'Moose', scientificName: 'Alces alces'}], birds: [{speciesId: 7355, commonName: "Cooper's Hawk", scientificName: 'Accipiter cooperii'}], reptiles: [], amphibians: [], fish: []}
  
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
      // Map current selection to a lookup object with speciesId as key
      const currentSelectionMap = prev[category].reduce((acc, item) => {
        acc[item.speciesId.toString()] = item;
        return acc;
      }, {});
  
      // Add new selections and remove deselections
      selectedIds.forEach(id => {
        if (currentSelectionMap[id]) {
          // If already selected, remove it (deselection)
          delete currentSelectionMap[id];
        } else {
          // If not selected, add it (selection)
          const speciesObj = species[category].find(species => species.species_id.toString() === id);
          if (speciesObj) {
            currentSelectionMap[id] = {
              speciesId: speciesObj.species_id,
              commonName: speciesObj.common_name,
              scientificName: speciesObj.scientific_name
            };
          }
        }
      });
  
      // Convert the lookup object back to an array
      return {
        ...prev,
        [category]: Object.values(currentSelectionMap)
      };
    });
  };
  
  return (
    <div>
      <label htmlFor="new-hunt-title">Title your scavenger hunt</label>
      <input id="new-hunt-title" type="text" name="new-hunt-title" value={huntTitle} onChange={handleChange} />
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




