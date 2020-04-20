import React from "react";
import Pet from "./Pet";

function Pets() {
  return (
    <div>
      <div className="pets flex flex-wrap justify-evenly">
        <Pet name="Ben" animal="Dog" breed="Husky" />
        <Pet name="Bogart" animal="Cat" breed="Mixed" />
        <Pet name="Florence" animal="Cat" breed="Persian" />
        <Pet name="Lila" animal="Cat" breed="British Shorthair" />
      </div>
    </div>
  );
}

export default Pets;
