import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Hudson" animal="Dog" breed="Goldendoodle" />
      <Pet name="Ollie" animal="Cat" breed="Tabby" />
      <Pet name="Sterling" animal="Cat" breed="Domestic Longhair" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
