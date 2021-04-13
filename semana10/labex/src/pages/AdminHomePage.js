import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator"
import { goToHomePage } from "../routes/coordinator"
import { goToCreateTripPage } from "../routes/coordinator"

const AdminHomePage = () => {
  const history = useHistory();
  return (
    <>
      <Titulo>Home do admin</Titulo>
        <Botao>
        <Voltar onClick={() => goToHomePage(history)}>Voltar</Voltar>
          <Criar onClick={() => goToCreateTripPage(history)}>Criar viagem</Criar>
          <Logout onClick={() => goToLoginPage(history)}>Logout</Logout>
        </Botao>
        <Card>
          <CardP><p>planetãoooo</p></CardP>
          <CardP><p>planetãoooo</p></CardP>
          <CardP><p>planetãoooo</p></CardP>
          <CardP><p>planetãoooo</p></CardP>
        </Card>  
    </>
  );
};

export default AdminHomePage;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardP = styled.div`
display: flex;
box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
padding: 10px 20px;
border-radius: 4px;
margin: 10px 0px;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
width: 460px;
`

const Titulo = styled.h2`
text-align: center;
font-family: 'Roboto Mono', monospace;
color:slategray;
`

const Botao = styled.div`
display: flex;
justify-content: center;
`

const Logout = styled.button`
margin: 15px;
height: 40px;
padding: 0px 20px;
border-radius: 20px;
border: none;
font-size: 16px;
background-color: #5B76FF;
min-width: 100px;
`
const Criar = styled.button`
margin: 15px;
height: 40px;
padding: 0px 20px;
border-radius: 20px;
border: none;
font-size: 16px;
background-color: #5B76FF;
min-width: 100px;
`
const Voltar = styled.button`
margin: 15px;
height: 40px;
padding: 0px 20px;
border-radius: 20px;
border: none;
font-size: 16px;
background-color: #5B76FF;
min-width: 100px;
`