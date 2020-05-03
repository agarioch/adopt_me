import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import catLogo from "./img/undraw_Playful_cat_rchv.svg";
import LocationContext from "./LocationContext";
import AnimalContext from "./AnimalContext";
import BreedContext from "./BreedContext";

function App() {
  const locationHook = useState("Seattle, WA");
  const animalHook = useState("dog");
  const breedHook = useState("");

  return (
    <LocationContext.Provider value={locationHook}>
      <AnimalContext.Provider value={animalHook}>
        <BreedContext.Provider value={breedHook}>
          <div>
            <nav className="flex items-center p-6 mb-6 border-t-4 border-teal-600 bg-white shadow">
              <Link to="/adopt_me">
                <img
                  src={catLogo}
                  alt="cat logo"
                  className="inline w-16 h-16"
                />
                <h1 className="title">Adopt Me</h1>
              </Link>
            </nav>
            <Router basepath="/adopt_me">
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </div>
        </BreedContext.Provider>
      </AnimalContext.Provider>
    </LocationContext.Provider>
  );
}

render(<App />, document.getElementById("root"));
