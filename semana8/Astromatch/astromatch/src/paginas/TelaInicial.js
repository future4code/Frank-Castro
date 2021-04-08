import React, {useState, useEffect} from "react"
import {BotaoCima, BotaoBaixo, BotaoMatches, BotaoLimpar, Card, CardPerfil, Imagem, Nome, Idade, Bio, Info, Sim, Nao} from "../estilo"
import url from "../parametros"
import axios from "axios";

function TelaInicial(props) {
    const [profile, setprofile] = useState({})
    const [carregado, setCarregado] = useState(false)

    const pegarPessoa = async() => {
        try{
            const res = await axios.get(`${url}/person`)
            setprofile(res.data.profile)
            setCarregado(true)
        }
        catch(error){
            console.log(error)
        }
    }

    const escolherPessoa = async (escolha) => {
        if (!profile) {
            window.alert("Não há mais usuários disponíveis, tente novamente mais tarde.")
            return
        }
        const body = {
            id: profile.id,
            choice: escolha
        }
        try {
            await axios.post(`${url}/choose-person`, body)
            pegarPessoa()
            setCarregado(false)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        pegarPessoa()
    },[])

    return(
        <Card>
            <BotaoCima>
                <BotaoLimpar onClick={props.limparMatches}>limpar</BotaoLimpar>
                <BotaoMatches onClick={() => props.mudarPagina("matches") } >matches</BotaoMatches>
            </BotaoCima>
            <CardPerfil>
                {!carregado && <h1>Carregando...</h1>}
                {(carregado && !profile) && <h1>Não há mais usuários disponíveis</h1>}
                <Info>
                {(carregado && profile) && <Imagem src={profile.photo} alt="Foto"/>}
                    {(carregado && profile) && <Nome>{profile.name},</Nome>}
                    {(carregado && profile) && <Idade> {profile.age}</Idade>}
                    {(carregado && profile) && <Bio>{profile.bio}</Bio>}
                </Info>
            <BotaoBaixo>
                <Nao onClick={() => escolherPessoa(false)}>X</Nao>
                <Sim onClick={() => escolherPessoa(true)}>♥️</Sim>
            </BotaoBaixo>
            </CardPerfil>
           
        </Card>
    )
}

export default TelaInicial;