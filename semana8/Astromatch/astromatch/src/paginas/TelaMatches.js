import React, {useState, useEffect} from "react"
import {A, BotaoCima, BotaoLimpar, BotaoMatches, CardMatches, ImageCard, NomeCard} from "../estilo"
import url from "../parametros"
import axios from "axios"

function TelaMatches(props) {
    const [matches, setmatches] = useState([])
    const [carregado, setCarregado] = useState(false)

    const pegarMatches = async() => {
        try{    
            const res = await axios.get(`${url}/matches`)
            setmatches(res.data.matches)
            setCarregado(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        pegarMatches()
    }, [])

    return(
        <A>
        <BotaoCima>
            <BotaoLimpar onClick={props.limparMatches}>Limpar Matches</BotaoLimpar>
            <BotaoMatches onClick={() => props.mudarPagina('inicial')}>Inicial</BotaoMatches>
        </BotaoCima>
        {(matches.length === 0 && carregado) && <div><h1>Você não possui Matches</h1></div>}
        {carregado ? matches.map((profile) => {
            return (
                <CardMatches>
                    <ImageCard src={profile.photo} alt="Foto de Perfil"/>
                    <NomeCard>{profile.name}</NomeCard>
                </CardMatches>)
        }): <div><h1>Carregando...</h1></div>}
    </A>
)
}

export default TelaMatches;