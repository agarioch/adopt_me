import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Pets from "./Pets";

function App() {
  return (
    <div className="block md:flex">
      <SearchParams />
      <Pets />
    </div>
  );
}

render(<App />, document.getElementById("root"));
