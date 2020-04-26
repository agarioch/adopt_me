import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import AnimalContext from "./AnimalContext";

const useAnimalDropdown = (label, options) => {
  const [animal, setAnimal] = useContext(AnimalContext);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const props = { id, label, state: animal, setState: setAnimal, options };

  const animalDropdown = () => <Dropdown {...props} />;

  return [animal, animalDropdown, setAnimal];
};

export default useAnimalDropdown;
