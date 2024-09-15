import React from "react";
import "./output.css"
import Navbar from "./components/navbar/Navbar";
import Carosal from "./components/carosal/Carosal";
import Cards from "./components/cards/Cards";
import GraphSeaction from "./components/graph/GraphSeaction";
import Section4 from "./components/section4/Section4";
function App() {
  return (
    <div>
      <Navbar/>
      <Carosal/>
      <Cards/>
      <GraphSeaction/>
      <Section4/>
    </div>
  );
}

export default App;
