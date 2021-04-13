import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

const ApplicationFormPage = () => {
  const history = useHistory();
  return (
    <>
      <Titulo>pagia de aplicação de formulario</Titulo>
      <Form>
        <Select><option value="" disabled="" selected="">Escolha uma Viagem</option></Select>
        <Input placeholder="Escolher viagem"/>
        <Input placeholder="Idade"/>
        <Input placeholder="Texto de candidatura"/>
        <Input placeholder="Profissão"/>
        <Select><option value="" disabled="" selected="">Escolha um Planeta</option></Select>
      </Form>
      <Botao>
        <Voltar onClick={history.goBack}>Voltar</Voltar>
        <Enviar>Enviar</Enviar>
      </Botao>
    </>
  );
};

export default ApplicationFormPage;

const Titulo = styled.h2`
text-align: center;
font-family: 'Roboto Mono', monospace;
color:slategray;
`
const Enviar = styled.button`
background: #5B76FF;
border-radius: 20px;
width: 251px;
height: 49px;
font-family: 'Roboto Mono', monospace;
font-size: 24px;
border: none;
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
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
const Input = styled.input`
width: 500px;
height: 30px;
border-radius: 20px;
padding: 4px 8px;
border-width: 1px;
border-color: gray;
margin: 0px 0px 15px;
`
const Botao = styled.div`
display: flex;
justify-content: space-evenly;
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