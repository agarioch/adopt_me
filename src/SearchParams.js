import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

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
        <AnimalDropdown />
        <BreedDropdown />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
