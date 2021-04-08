import React from "react";
import axios from "axios";

export default class App extends React.Component {
state={
    pokelista: [],
    imgPoke: "",
}    

    componentDidMount() {
        this.pegarPokemon();
    }

    pegarPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then((resposta) => this.setState({pokelista: resposta.data.results}))
        .catch((error) => console.log(error));
        
    };

    // pegarImgPokes = (nome) => {
    //     axios
    //     .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    //     .then((resposta) => {
    //         console.log(resposta.data.sprites.front_default);
    //       this.setState({ imgPoke: resposta.data.sprites.front_default})
    //     }) 
    //     .catch((error) => console.log(error))
        
    // }

    pegarImgPokes = async (event) => {
    try {
      const url = event.target.value;
      const response = await axios.get(`${url}`);
      console.log(response.data.sprites.front_default);
      this.setState({ imgPoke: response.data.sprites.front_default });
    } catch (error) {
      console.log(error);
    }
  };

    selecionar = (e) => {
        const nomepoke = e.target.value
        this.pegarPokemon(nomepoke)
    }

    render() {
        return(
            <div className="App">

                <h1>Pokémon</h1>

                <select onChange={this.selecionar}>

                    <option value={""}></option>

                    {this.state.pokelista.map((poke)=>{
                        return <option key={poke.name} value={poke.name}>{poke.name}</option>
                    })
                    };
                </select>

                {this.setState.imgPoke && <img alt={"imagem poke"} src={this.state.imgPoke}/>}
                
            </div>
        )
    }

}