import React from "react";
// import "./index.css"
import "./output.css"
import Navbar from "./components/navbar/Navbar";
import Carosal from "./components/carosal/Carosal";
import Cards from "./components/cards/Cards";
import { Helpinghand } from "./components/helpiinghand/Helpinghand";
function App() {
  return (
    <div>
      <Navbar/>
      <Carosal/>
      <Cards/>
      
    </div>
  );
}

export default App;
