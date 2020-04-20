import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

function App() {
  return (
    <div className="flex flex-wrap m-8">
      <Pet name="Ben" animal="Dog" breed="Husky" />
      <Pet name="Bogart" animal="Cat" breed="Mixed" />
      <Pet name="Florence" animal="Cat" breed="Persian" />
      <Pet name="Lila" animal="Cat" breed="British Shorthair" />
    </div>
  );
}

render(React.createElement(App, {}, null), document.getElementById("root"));
