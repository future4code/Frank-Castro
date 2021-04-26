import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { goToApplicationFormPage } from "../routes/coordinator"


const ListaViagens = () => {
  const history = useHistory();
    return (
      <div>
          <Botao>
            <Voltar onClick={history.goBack}>Voltar</Voltar>
            <Inscrever onClick={() => goToApplicationFormPage(history)}>inscrever-se</Inscrever>
          </Botao>
            <Titulo>Lista de Viagens</Titulo>
          <CardViagem>
            <Texto>
              <p>Nome: Plutão é planeta sim!</p>
              <p>Descrição: Desvende os mistérios de plutão</p>
              <p>Planeta: Plutão</p>
              <p>Duração: 52</p>
              <p>Data: 2021-04-21</p>
            </Texto>
          </CardViagem>
          <CardViagem>
            <Texto>
              <p>Nome: Plutão é planeta sim!</p>
              <p>Descrição: Desvende os mistérios de plutão</p>
              <p>Planeta: Plutão</p>
              <p>Duração: 52</p>
              <p>Data: 2021-04-21</p>
            </Texto>
          </CardViagem>
          <CardViagem>
            <Texto>
              <p>Nome: Plutão é planeta sim!</p>
              <p>Descrição: Desvende os mistérios de plutão</p>
              <p>Planeta: Plutão</p>
              <p>Duração: 52</p>
              <p>Data: 2021-04-21</p>
            </Texto>
          </CardViagem>
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
  border-radius: 20px;
  width: 251px;
  height: 49px;
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  border: none;
  `

  const Inscrever = styled.button`
  background: #5B76FF;
  border-radius: 20px;
  width: 251px;
  height: 49px;
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  border: none;
  `

  const Titulo = styled.h1`
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  color:slategray;
  `

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