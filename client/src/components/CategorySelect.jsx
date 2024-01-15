export default function CategorySelect({category, speciesList, onSpeciesSelect}) {

  const handleChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedIds = selectedOptions.map(option => option.value);
    onSpeciesSelect(category, selectedIds);
  };
  
    
  return (
    <div>
      <select multiple onChange={handleChange} >
        <option value="">Select {category}</option>
        {speciesList.map(species => (
          <option key={species.species_id} value={species.species_id}>{species.common_name.split(',')[0]}</option>
        ))}
      </select>
    </div>
  )
   
}

