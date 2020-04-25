import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import catLogo from "./img/undraw_Playful_cat_rchv.svg";

function App() {
  return (
    <div>
      <nav className="flex items-center p-6 mb-6 border-t-4 border-teal-600 bg-white shadow">
        <Link to="/">
          <img src={catLogo} alt="cat logo" className="inline w-16 h-16" />
          <h1 className="title">Adopt Me</h1>
        </Link>
      </nav>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
