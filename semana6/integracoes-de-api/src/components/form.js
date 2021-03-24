import React from "react";
import axios from "axios";
import styled from "styled-components"
import { axiosConfig, baseUrl } from "../parameters";

const FormConteiner = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;

  div {
    margin-bottom: 15px;
  }
`
const Input = styled.input`
margin: 5px

` 
const Titulo = styled.h2`
text-align: center;
margin: 5px;
`

const Button = styled.button`
margin: 0 auto;
background-color: hsl(236,32%,26%);
color: white;
border: none;
z-index: 1;
position: relative;
font-size: inherit;
font-family: inherit;
color: white;
padding: 0.5em 1em;
outline: none;
border: none;
overflow: hidden;
cursor: pointer;
`

export default class FormPage extends React.Component {
  state = {
    name: "",
    email: ""
  }

  eventName = (e) => {
    this.setState({ name: e.target.value })
  };

  eventEmail = (e) => {
    this.setState({ email: e.target.value })
  };

  createrUser = () => {
    const body = {
      name: this.state.name, 
      email: this.state.email
    };
  
    axios
      .post(baseUrl, body, axiosConfig)
      .then((res) => {
        console.log(res);
        alert("sucesso!!");
        this.setState({ name: "", email: "" });
      })
      .catch((err) => {
        alert("erro")
        console.log(err);
      })

  }
    render() {
        return(
            <FormConteiner>
                <Titulo>Criar usuário</Titulo>
                <Input
                onChange={this.eventName}
                value={this.state.name}
                placeholder="Nome"
                />
                <Input
                onChange={this.eventEmail}
                value={this.state.email}
                placeholder="Email"
                />
                <Button onClick={this.createrUser}>Criar</Button>
            </FormConteiner>
        )
    }
}

