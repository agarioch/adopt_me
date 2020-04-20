import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState();

  return (
    <div className="search-params w-full max-w-xs m-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
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
        <div className="form-group">
          <label htmlFor="animal" className="frm-label">
            Type of Animal
          </label>
          <select
            className="form-select block w-full"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="breed" className="frm-label">
            Breed
          </label>
          <select
            className="form-select block w-full"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled
          >
            <option>All</option>
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
