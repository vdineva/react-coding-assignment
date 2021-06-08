import React from "react";
import { render } from "react-dom";
import Header from "./Header.js";
import Card from "./Card.js";

import experiences from "./api/mock.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="Container">
        <Card experience={experiences[0]} />
      </section>
    </div>
  );
}

render(<App />, document.getElementById("root"));
