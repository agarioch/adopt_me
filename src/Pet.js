import React from "react";
import breedIcon from "./img/pets-black-18dp.svg";
import locationIcon from "./img/place-black-18dp.svg";
export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a
      href={`/details/${id}`}
      className="pet rounded bg-white shadow-lg m-3 h-32 flex border-gray-400 items-center"
    >
      <img
        src={hero}
        alt={name}
        className="w-24 h-24 float-left max-w-full max-h-full object-cover rounded-full -ml-6 border-white border-4"
      />
      <div className="px-2 w-64">
        <div className="name-wrapper inline-block max-w-full">
          <h1 className="pet-name text-2xl font-semibold text-teal-700 truncate">
            {name}
          </h1>
          <div className="w-full h-1 bg-teal-200 -mt-1 mb-1"></div>
        </div>
        <div className="py-2">
          <div>
            <img src={breedIcon} alt="" className="inline pr-1 fill-gray-600" />
            <span className="text-sm truncate text-gray-600">
              {animal} • {breed}
            </span>
          </div>
          <div>
            <img src={locationIcon} alt="" className="inline pr-1 text-gr" />
            <span className="text-sm truncate text-gray-600">{location}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
