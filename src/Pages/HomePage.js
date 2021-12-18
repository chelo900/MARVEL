import { useEffect, useState } from "react";
import { getCharacters } from "../api";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => setCharacters(data.results));
  }, []);

  console.log(characters);
  return (
    <div>
      <h1>Home Page</h1>
      {characters && characters.map((character) => character.name)}
    </div>
  );
}
