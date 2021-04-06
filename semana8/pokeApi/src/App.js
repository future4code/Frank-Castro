import React, {useState, useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = () => {
  const [pokelist, setpokelist] = useState([])
  const [pokeName, setpokeName] = useState("")

  const personUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151"

  useEffect(() => {
    const getpoke = () => {
      axios
        .get(personUrl)
        .then(response => {setpokelist(response.data.results)})
        .catch(err => {console.log(err)});
    }
    getpoke();
  }, [])

  const changePokeName = (e) => {
    setpokeName(e.target.value);
  };

    return (
      <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokelist.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
}

export default App;
