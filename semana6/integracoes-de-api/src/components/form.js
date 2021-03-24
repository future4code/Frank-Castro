import React from "react";
import axios from "axios";
import styled from "styled-components"
import { axiosConfig, baseUrl } from "../parameters";

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
            <div>
                <h2>Criar usuário</h2>
                <input
                onChange={this.eventName}
                value={this.state.name}
                placeholder="Nome"
                />
                <input
                onChange={this.eventEmail}
                value={this.state.email}
                placeholder="Email"
                />
                <button onClick={this.createrUser}>Criar</button>
            </div>
        )
    }
}

