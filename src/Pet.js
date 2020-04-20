import React from "react";
export default function Pet({ name, animal, breed }) {
  return (
    <div className="w-64 rounded overflow-hidden shadow-lg bg-white m-2 px-6 py-4 text-gray-800">
      <h1 className="text-2xl font-semibold text-teal-700">{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
