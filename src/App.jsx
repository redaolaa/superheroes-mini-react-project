import React, { useState, useEffect } from "react";
import "./App.css";
import Heroes from "./Heroes.jsx";
import Filter from "./Filter.jsx";

import backgroundImg from './superhero.jpg';

function App() {
  const [superhero, setSuperhero] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [filterGender, setFilterGender] = useState("");
  const [filterName, setFilterName] = useState("");

  // console.log( superhero, filteredHereos, filterGender, filterName)

  useEffect(() => {
    async function fetchSuperheroes() {
      const resp = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      const superheroesData = await resp.json();
      setSuperhero(superheroesData);
      setFilteredHeroes(superheroesData);
    }
    fetchSuperheroes();
  }, []);

  useEffect(() => {
    const filtered = superhero.filter((hero) => {
      const sameGender =filterGender
      ?hero.appearance.gender.toLowerCase().includes(filterGender.toLowerCase())
       : true;


        const sameName= filterName
        ? hero.name.toLowerCase().includes(filterName.toLowerCase())
        :true;
      return sameGender && sameName;
    });
    setFilteredHeroes(filtered);
  }, [filterGender, filterName, superhero]);

  const clearFilters = () => {
    setFilterGender("");
    setFilterName("");
    setFilteredHeroes(superhero);
  };



  return (
    <>
      <h1>Superheroes</h1>
      <Filter 
      setFilterGender={setFilterGender} 
      filterGender={filterGender}
      filterName={filterName}
      setFilterName={setFilterName} 
      clearFilters={clearFilters} />

      <ul>
        {filteredHeroes.map((hero) => (
          <Heroes
            key={hero.id}
            name={hero.name}
            gender={hero.appearance.gender}
            image={hero.images.sm}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
