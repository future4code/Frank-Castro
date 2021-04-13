import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator"

const LoginPage = () => {
  const history = useHistory();
  return (
    <>
      <Titulo>Login</Titulo>
      <Form>
        <Input placeholder="E-mail"/>
        <Input placeholder="Senha"/>
      </Form>
      <Botao>
        <Voltar onClick={history.goBack}>Voltar</Voltar>
        <Entrar onClick={() => goToAdminHomePage(history)}>entrar</Entrar>
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