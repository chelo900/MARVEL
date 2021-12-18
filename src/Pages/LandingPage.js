import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div>
        <h1>MARVEL UNVIERSE EXPLORER </h1>
        <h2>By Marcelo Nieto</h2>
        <div>
          <Link to="/home">
            <button>EXPLORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
