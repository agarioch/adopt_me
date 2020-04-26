import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useAnimalDropdown from "./useAnimalDropdown";
import useBreedDropdown from "./useBreedDropdown";
import Pets from "./Pets";
import LocationContext from "./LocationContext";

const SearchParams = () => {
  const [location, setLocation] = useContext(LocationContext);
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useAnimalDropdown("Animal", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useBreedDropdown("Breed", breeds);
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

  useEffect(() => {
    requestPets();
  }, []);

  return (
    <div className="block md:flex">
      <div className="search-params w-full flex-shrink-0 max-w-xs m-4">
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
          <button className="btn btn-primary w-full">Search For Pets</button>
        </form>
      </div>
      <Pets pets={pets} />
    </div>
  );
};

export default SearchParams;
