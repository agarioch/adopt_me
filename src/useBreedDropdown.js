import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import BreedContext from "./BreedContext";

const useBreedDropdown = (label, options) => {
  const [breed, setBreed] = useContext(BreedContext);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const props = { id, label, state: breed, setState: setBreed, options };

  const BreedDropdown = () => <Dropdown {...props} />;

  return [breed, BreedDropdown, setBreed];
};

export default useBreedDropdown;
