import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Pets from "./Pets";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    console.log(animals);
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [setBreeds, setBreed, animal]);

  return (
    <div className="block md:flex">
      <div className="search-params w-full md:max-w-screen-xs max-w-xs m-4">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8"
          onSubmit={(e) => {
            e.preventDefault();
            requestPets();
          }}
        >
          <h2 className="text-teal-700 text-2xl">Search pets</h2>
          <div className="form-group">
            <label htmlFor="location" className="frm-label">
              Location
            </label>
            <input
              id="location"
              value={location}
              placeholder={location}
              type="text"
              className="form-input block w-full"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <AnimalDropdown />
          <BreedDropdown />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
      <Pets pets={pets} />
    </div>
  );
};

export default SearchParams;
