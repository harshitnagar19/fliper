import React from "react";
import "./output.css"
import Navbar from "./components/navbar/Navbar";
import Carosal from "./components/carosal/Carosal";
import Cards from "./components/cards/Cards";
import GraphSeaction from "./components/graph/GraphSeaction";
import Section4 from "./components/section4/Section4";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Footer from "./components/footer/Footer"
import Dashboard from "./components/dashboard/Dashboard"; 
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>
          <Navbar />
          <Carosal />
          <Cards />
          <GraphSeaction />
          <Section4 />
          <Footer />
        </div>} />
        <Route path="/login" element={<div> <Login /></div>} />
        <Route path="/register" element={<div> <Register /></div>} />
        <Route path="/dashboard" element={<div> <Dashboard /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
