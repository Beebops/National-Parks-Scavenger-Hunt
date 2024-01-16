import {useParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import CategorySelect from './CategorySelect'
import SelectedSpeciesList from './SelectedSpeciesList';

export default function SpeciesSelector() {
  const navigate = useNavigate()
  const {parkId} = useParams()
  const [huntTitle, setHuntTitle] = useState('')
  const [species, setSpecies] = useState({mammals: [], birds: [], reptiles: [], amphibians: [], fish: []})
  const [selectedSpecies, setSelectedSpecies] = useState({mammals: [], birds: [], reptiles: [], amphibians: [], fish: []})

  const handleChange = e => {
    setHuntTitle(e.target.value)
  }

  

  // selectedSpecies {mammals: [{speciesId: 7662, commonName: 'Moose', scientificName: 'Alces alces'}], birds: [{speciesId: 7355, commonName: "Cooper's Hawk", scientificName: 'Accipiter cooperii'}], reptiles: [], amphibians: [], fish: []}

  // JSON to send to '/users/:userId/hunts ---> 
// {  
// 	"userId": 5,
// 	"parkId": "zion",
// 	"huntTitle": ${huntTitle},
// 	"selectedSpeciesIds": []
// }


  // make a post request to this resource: /users/:userId/hunts
  // in the request body send as JSON {"userId": 5, "parkId": ${parkId}, "huntTitle": ${huntTitle}, 	"selectedSpeciesIds": ${speciesIds}}
  // redirect to Home, which should now display the new Hunt

  // if new hunt was not created display an error message to user
const handleSubmit = async e => {
  e.preventDefault()
  if (!huntTitle) {
    alert('Please enter a title for your scavenger hunt')
      return
  }

  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('token');

  // create an array off speciesIds from selectedSpecies
  const speciesIds = Object.values(selectedSpecies)
      .flatMap(category => category.map(species => species.speciesId)
    )

    const newHuntData = {
      userId: parseInt(userId),
      parkId: parkId,
      huntTitle: huntTitle,
      selectedSpeciesIds: speciesIds
    }
    
  try {
    const response = await axios.post(`/users/${userId}/hunts`, newHuntData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    } )
    console.log('New hunt creted', response.data)
  
    navigate('/home')
  } catch (err) {
    console.log('Error creating hunt: ', err)
  }
}

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-hunt-title">Title your scavenger hunt</label>
      <input id="new-hunt-title" type="text" name="new-hunt-title" value={huntTitle} onChange={handleChange} />
      <CategorySelect category="mammals" onSpeciesSelect={handleSpeciesSelect} speciesList={species.mammals} />
      <CategorySelect category="birds" onSpeciesSelect={handleSpeciesSelect} speciesList={species.birds} />
      <CategorySelect category="reptiles" onSpeciesSelect={handleSpeciesSelect} speciesList={species.reptiles} />
      <CategorySelect category="amphibians" onSpeciesSelect={handleSpeciesSelect} speciesList={species.amphibians} />
      <CategorySelect category="fish" onSpeciesSelect={handleSpeciesSelect} speciesList={species.fish} />
      <SelectedSpeciesList selectedSpecies={selectedSpecies} />
      <button>Create Hunt</button>

    </form>
  )
}




