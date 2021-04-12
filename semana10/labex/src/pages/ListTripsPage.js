import { useState } from "react";
import React from "react";
import axios from "axios";
import styled from 'styled-components'

const ListaViagens = () => {
    return (
      <div>
          <Botao>
          <Voltar>Voltar</Voltar>
          <Inscrever>inscrever-se</Inscrever>
          </Botao>
          <Titulo>Lista de Viagens</Titulo>
          <CardViagem>a</CardViagem>
      </div>
    );
}

  export default ListaViagens;

  const Botao = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
  `

  const Voltar = styled.button`
  background: #5B76FF;
  border-radius: 10px;
  width: 251px;
  height: 49px;
  `

  const Inscrever = styled.button`
  background: #5B76FF;
  border-radius: 10px;
  width: 251px;
  height: 49px;
  `

  const Titulo = styled.h1`
  text-align: center;
  `

  const CardViagem = styled.div`
  background-color: blue;
  `