import React from "react";
export default function Pet({ name, animal, breed }) {
  return (
    <div className="w-64 rounded overflow-hidden shadow-lg bg-white m-2 px-6 py-4 text-gray-800">
      <div className="name-wrapper inline-block">
        <h1 className="pet-name text-2xl font-semibold text-teal-700">
          {name}
        </h1>
        <div className="w-full h-1 bg-teal-200 -mt-1 mb-1"></div>
      </div>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
