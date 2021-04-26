import React, { useState } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const pegarEmail = (e) => {
    setEmail(e.target.value);
  };

  const pegarSenha = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/frank-castro-cruz/login",
        body
      )
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem('token', res.data.token)
        history.push('/home-adm')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Titulo>Login</Titulo>
      <Form>
        <Input value={email} onChange={pegarEmail} placeholder="E-mail"/>
        <Input value={password} onChange={pegarSenha} placeholder="Senha"/>
      </Form>
      <Botao>
        <Voltar onClick={history.goBack}>Voltar</Voltar>
        <Entrar onClick={login}>entrar</Entrar>
      </Botao>
    </>
  );
};

export default LoginPage;

const Titulo = styled.h2`
text-align: center;
font-family: 'Roboto Mono', monospace;
color:slategray;
`
const Voltar = styled.button`
margin:  5px 15px 5px 15px;
height: 40px;
padding: 0px 20px;
border-radius: 20px;
border: none;
font-size: 16px;
background-color: #5B76FF;
min-width: 100px;
`

const Entrar = styled.button`
margin: 5px 15px 5px 15px;
height: 40px;
padding: 0px 20px;
border-radius: 20px;
border: none;
font-size: 16px;
background-color: #5B76FF;
min-width: 100px;
`

const Botao = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`

const Input = styled.input`
width: 500px;
height: 30px;
border-radius: 10px;
padding: 4px 8px;
border-width: 1px;
border-color: gray;
margin: 0px 0px 15px;
`