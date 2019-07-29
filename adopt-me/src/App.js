import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Hudson",
      animal: "Dog",
      breed: "Goldendoodle"
    }),
    React.createElement(Pet, { name: "Ollie", animal: "Cat", breed: "Tabby" }),
    React.createElement(Pet, {
      name: "Sterling",
      animal: "Cat",
      breed: "Domestic Longhair"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
