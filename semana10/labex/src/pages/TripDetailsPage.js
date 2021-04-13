import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

const TripDetailsPage = () => {
  const history = useHistory();
  return (
    <>
      <CardViagem>
        <Texto>
          <Titulo>Plutão é planeta sim!</Titulo>
            <p>Nome: Plutão é planeta sim!</p>
            <p>Descrição: Desvende os mistérios de plutão</p>
            <p>Planeta: Plutão</p>
            <p>Duração: 52</p>
            <p>Data: 2021-04-21</p>
        </Texto>
      </CardViagem>
      <Botao>
        <Voltar onClick={history.goBack}>Voltar</Voltar>
      </Botao>
      <Titulo2>Candidatos Pendentes</Titulo2>

      <CardViagem>
        <Texto>
        <p>Nome: Frank de Castro Filho</p>
          <p>Profissão: Programador </p>
          <p>idade: 20</p>
          <p>País: Brasil</p>
          <p>Textod de candidatura: Quero muito ir a Plutão, preciso conhecer esse planetinha!</p>
        </Texto>
        <Botao>
          <Aprovar>Aprovar</Aprovar>
          <Reprovar>Reprovar</Reprovar>
        </Botao>
      </CardViagem>
      <Titulo2>Candidatos Aprovados</Titulo2>
      <Aprovados>Lidiane Andrade</Aprovados>
      <Aprovados>Astrodev</Aprovados>
    </>
  );
};

export default TripDetailsPage;

const CardViagem = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
`
const Texto = styled.ul`
box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
padding: 10px 20px;
border-radius: 4px;
margin: 10px 0px;
max-width: 500px;
width: 100%;
`

const Titulo = styled.h2`
text-align: center;
font-family: 'Roboto Mono', monospace;
color:slategray;
`

const Titulo2 = styled.h3`
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

const Botao = styled.div`
  display: flex;
  justify-content: center;
`

const Aprovar = styled.button`
margin:  5px 15px 5px 15px;
height: 40px;
padding: 0px 20px;
border-radius: 20px;
border: none;
font-size: 16px;
background-color: #5B76FF;
min-width: 100px;
`
const Reprovar = styled.button`
margin:  5px 15px 5px 15px;
height: 40px;
padding: 0px 20px;
border-radius: 20px;
border: none;
font-size: 16px;
background-color: #5B76FF;
min-width: 100px;
`

const Aprovados = styled.ul`
text-align: center;
`
