import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Landing from "./components/Landing";
import dotenv from "dotenv";
// import axios from "axios";
dotenv.config();

// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/superheroes/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
