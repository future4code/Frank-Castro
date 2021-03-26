import React from "react"; 
import axios from "axios"; 
import styled from "styled-components"
import { axiosConfig, baseUrl } from "../parametros";


export default class CriaPlaylist extends React.Component {
    state = {
        nome: ""
    }

eventPlaylist = (e) => {
    this.setState({ nome: e.target.value })
   // console.log(e.target.value)
   
};   

criadorPlaylist = () => {
    const body = {
        name: this.state.nome 
    }
     
    console.log(body)

    axios
        .post(baseUrl, body, axiosConfig)   
        .then((res) => {
            console.log(res);
            alert("sucesso!!!");
            this.setState({ nome: ""});
        })
        .catch((err) => {
            alert("erro")
            console.log(this.state.name)
            console.log(`${err.status}:${err.statusText}:${err.data}`);
        }) 
};

render() {
    return(
        <div>    
            <Criar>        
            <h1>cria playlist</h1>
            <p>nome da playlist:</p>
            <input 
            onChange={this.eventPlaylist}
            value={this.state.name}
            />
            <Button onClick={this.criadorPlaylist}>criar</Button>
            </Criar>  
        </div>
        )
    }

} 

const Criar = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    margin: 10px;
`