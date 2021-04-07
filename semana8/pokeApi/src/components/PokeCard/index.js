import React, {useState, useEffect} from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setpokemon] = useState({})

  const personUrl = "https://pokeapi.co/api/v2/pokemon/"
  
 useEffect( () => {
  pegaPokemon(props.pokemon);
 }
 ,[props.pokemon]); 

  const pegaPokemon = pokeName => {
    axios
      .get(`${personUrl}${pokeName}`)
      .then(response => {setpokemon(response.data)})
      .catch(err => {console.log(err)})
  };

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}

export default PokeCard;
