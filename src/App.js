import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Detail from "./Pages/DetailPage";
import Landing from "./Pages/LandingPage";
// import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/superheroes/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
