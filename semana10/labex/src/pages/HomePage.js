import { useState } from "react";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { goToLoginPage, goToListTripsPage, goToTripDetailsPage } from "../routes/coordinator"

const HomePage = () => {
  const history = useHistory();
    return (
      <div>
        <Titulo>LabeX</Titulo>
          <Botao>
            <ViagemBotao onClick={() => goToListTripsPage(history)}>Ver Viagens</ViagemBotao>
            <AdmBotao onClick={() => goToLoginPage(history)}>Área de Admin</AdmBotao>
          </Botao>
          <button onClick={() => goToTripDetailsPage(history)}>ir para detalhes da viagem(temporario)</button>
      </div>
    );
}

  export default HomePage;

const Titulo = styled.h1`
text-align: center;
font-family: 'Roboto Mono', monospace;
color:slategray;
`

const Botao = styled.div`
display: flex;
justify-content: space-evenly;
`

const ViagemBotao = styled.button`
background: #5B76FF;
border-radius: 30px;
width: 251px;
height: 49px;
font-family: 'Roboto Mono', monospace;
font-size: 24px;
border: none;
`

const AdmBotao = styled.button`
background: #5B76FF;
border-radius: 30px;
width: 251px;
height: 49px;
font-size: 24px;
font-family: 'Roboto Mono', monospace;
font-size: 24px;
border: none;
`