import { useState } from "react";
import React from "react";
import axios from "axios";
import styled from 'styled-components'

const HomePage = () => {
    return (
      <div>
        <Titulo>LabeX</Titulo>
        <Botao>
        <AdmBotao>Ver Área de Admin</AdmBotao>
        <AdmViagem>Ver Viagens</AdmViagem>
        </Botao>
      </div>
    );
}

  export default HomePage;

const Titulo = styled.h1`
text-align: center
`

const Botao = styled.div`
display: flex;
justify-content: space-evenly;
`

const AdmViagem = styled.button`
background: #5B76FF;
border-radius: 10px;
width: 251px;
height: 49px;
`

const AdmBotao = styled.button`
background: #5B76FF;
border-radius: 10px;
width: 251px;
height: 49px;
`