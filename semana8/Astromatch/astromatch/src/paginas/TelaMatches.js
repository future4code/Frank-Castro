import React, {useState, useEffect} from "react"
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
        <div>
        <div>
            <button onClick={props.limparMatches}>Limpar Matches</button>
            <button onClick={() => props.mudarPagina('inicial')}>Inicial</button>
        </div>
        {(matches.length === 0 && carregado) && <div><h1>Você não possui Matches</h1></div>}
        {carregado ? matches.map((profile) => {
            return (
                <div>
                    <img src={profile.photo} alt="Foto de Perfil"/>
                    <h1>{profile.name}</h1>
                </div>)
        }): <div><h1>Carregando...</h1></div>}
    </div>
)
}

export default TelaMatches;