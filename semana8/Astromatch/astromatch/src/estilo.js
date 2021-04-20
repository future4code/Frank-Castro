
import styled from 'styled-components'

    export const DivGlobal = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
    `
/////////////////////////////////

    export const Card = styled.div`
    padding: 20px 20px 0px;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    `

    export const BotaoCima = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
    `
    export const BotaoLimpar = styled.div`
    
    `
    export const BotaoMatches = styled.div`
    
    `
    export const BotaoBaixo = styled.div`
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 0px;
    `
    export const CardPerfil = styled.div`
    padding: 20px 20px 0px;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    `
    export const Imagem = styled.img`
    height: 60%;
    width: 70%;
    `
    export const Nome = styled.div`
    font-weight: bold;
    font-size: 24px;
    `
    export const Idade = styled.div`
    margin-left: 10px;
    font-size: 20px;
    `
    
    export const Bio = styled.div`
    margin-top: 5px;
    `
    
    export const Info = styled.div`
    `
    export const Sim = styled.div`
    border-radius: 50%;
    text-align: center;
    width: 80px;
    height: 80px;
    border: 1px solid green;
    color: green;
    font-size: 50px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
    overflow: hidden;
    `
    export const Nao = styled.div`
    border-radius: 50%;
    text-align: center;
    width: 80px;
    height: 80px;
    border: 1px solid green;
    color: red;
    font-size: 50px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;

    overflow: hidden;
    
    `
    //////////////////////////////////////
    
    export const A = styled.div`
    
    `
    export const CardMatches = styled.ul`
    position: relative;
    padding: 10px;
    display: flex;
    list-style: none;
    width: 100%;
    cursor: pointer;
    `
    export const ImageCard = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    `
    export const NomeCard= styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    `
    // export const = styled.div``

