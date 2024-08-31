import React from 'react';


function Filter ({filterName, filterGender, setFilterGender, setFilterName, clearFilters}){

    const handleGenderChange =(e) => {
console.log(e.target.value)
    setFilterGender(e.target.value);
    }

    const handleNameChange = (e) => {
setFilterName(e.target.value);


    }

return (
<div>
< input
type = "text"
placeholder= "'Male' or 'Female'"
value={filterGender}
onChange={handleGenderChange}
/>
<input
type= "text"
placeholder= "Search by Name"
value= {filterName}
onChange= {handleNameChange}
/>
<button onClick={clearFilters}>Clear</button>
</div>
)
}

export default Filter;