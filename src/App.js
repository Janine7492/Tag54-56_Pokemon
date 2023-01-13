import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Menu from './pages/Menu'
import Details from './pages/Details'
import Mode from "./img/mood.png"
import TypeDetails from './pages/TypeDetails';


function App() {

  const [toggle, setToggle] = useState("bgcLight")

  console.log(toggle)

  const toggleFunction = () => {
    if (toggle === "bgcDark") {
      setToggle("bgcLight");
      document.getElementById("pokeWrapper").classList.add("bkgYellow");
      document.getElementById("pokeWrapper").classList.remove("bkgDark");
    } else if (toggle === "bgcLight") {
      setToggle("bgcDark");
      document.getElementById("pokeWrapper").classList.add("bkgDark");
      document.getElementById("pokeWrapper").classList.remove("bkgYellow");
    }
  }

  return (
    <div className={toggle}>
      <Router>
        <button type="button" onClick={toggleFunction} className="modeButton"><img src={Mode} /></button>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="/type-details/:name" element={<TypeDetails />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;