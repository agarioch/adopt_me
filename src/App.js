import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

function App() {
  return (
    <div>
      <div className="pets grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl">
        <Pet name="Ben" animal="Dog" breed="Husky" />
        <Pet name="Bogart" animal="Cat" breed="Mixed" />
        <Pet name="Florence" animal="Cat" breed="Persian" />
        <Pet name="Lila" animal="Cat" breed="British Shorthair" />
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
