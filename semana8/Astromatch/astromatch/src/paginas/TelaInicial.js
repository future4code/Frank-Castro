import React, {useState, useEffect} from "react"
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
        <div>
            <div>
                <button onClick={() => props.mudarPagina("matches") } >matches</button>
                <button onClick={props.limparMatches}>limpar</button>
            </div>
            {!carregado && <h1>Carregando...</h1>}
            {(carregado && !profile) && <h1>Não há mais usuários disponíveis</h1>}
            {(carregado && profile) && <h1>{profile.name}, {profile.age}</h1>}
            {(carregado && profile) && <h3>{profile.bio}</h3>}
            {(carregado && profile) && <img src={profile.photo} alt="Foto"/>}
            <div>
                <button onClick={() => escolherPessoa(true)}>sim</button>
                <button onClick={() => escolherPessoa(false)}>não</button>
            </div>
           
        </div>
    )
}

export default TelaInicial;