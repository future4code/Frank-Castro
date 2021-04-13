import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

const CreateTripPage = () => {
  const history = useHistory();
  return (
    <>
<Titulo>Criar viagem</Titulo>
      <Form>
        <Input placeholder="Nome"/>
        <Select><option value="" disabled="" selected="">Escolha um Planeta</option></Select>
        <Input placeholder="Data"/>
        <Input placeholder="Descrição"/>
        <Input placeholder="Duração em dias "/>

      </Form>
      <Botao>
        <Voltar onClick={history.goBack}>Voltar</Voltar>
        <Enviar>Enviar</Enviar>
      </Botao>
    </>
  );
};

export default CreateTripPage;

const Titulo = styled.h2`
text-align: center;
font-family: 'Roboto Mono', monospace;
color:slategray;
`
const Enviar = styled.button`
margin: 5px 15px 5px 15px;
height: 40px;
padding: 0px 20px;
border-radius: 20px;
border: none;
font-size: 16px;
background-color: #5B76FF;
min-width: 100px;
`
const Voltar = styled.button`
margin: 5px 15px 5px 15px;
height: 40px;
padding: 0px 20px;
border-radius: 20px;
border: none;
font-size: 16px;
background-color: #5B76FF;
min-width: 100px;
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
const Botao = styled.div`
display: flex;
justify-content: center;
padding: 30px;
`
const Select = styled.select`
  width: 518px;
  height: 40px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  margin: 0px 0px 15px;
`