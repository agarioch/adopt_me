import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params w-full max-w-xs m-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-teal-700 text-2xl">Search pets</h2>
        <label htmlFor="location" className="label">
          Location
        </label>
        <input
          id="location"
          value={location}
          placeholder={location}
          type="text"
          className="input"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
