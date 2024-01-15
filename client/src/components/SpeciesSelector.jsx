import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import CategorySelect from './CategorySelect'

export default function SpeciesSelector() {
  const {parkId} = useParams()
  const [species, setSpecies] = useState({mammals: [], birds: [], reptiles: [], amphibians: [], fish: []})

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
  console.log(species)
  return (
    <div>
      <CategorySelect speciesList={species.mammals} />
      <CategorySelect speciesList={species.birds} />
      <CategorySelect speciesList={species.reptiles} />
      <CategorySelect speciesList={species.amphibians}/>
      <CategorySelect speciesList={species.fish} />
    </div>
  )
}