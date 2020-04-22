import React from "react";
import Pet from "./Pet";
import notFoundImage from "./img/undraw_loading_frh4.svg";

const Pets = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <div className="pl-8 pt-8">
          <h1 className="text-3xl text-gray-700 tracking-tight">
            No pets found ...
          </h1>
          <img src={notFoundImage} alt="" className="block w-64 h-64" />
        </div>
      ) : (
        <div className="pets flex flex-wrap justify-evenly">
          {pets.map((pet) => {
            return (
              <Pet
                animal={pet.type}
                key={pet.id}
                name={pet.name}
                breed={pet.breeds.primary}
                media={pet.photos}
                location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                id={pet.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pets;
