import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

function App() {
  return (
    <Router>
      <SearchParams path="/" />
      <Details path="/details/:id" />
    </Router>
  );
}

render(<App />, document.getElementById("root"));
