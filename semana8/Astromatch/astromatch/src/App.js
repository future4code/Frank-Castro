import React, {useState, useEffect} from "react"
import TelaInicial from "./paginas/TelaInicial"
import TelaMatches from "./paginas/TelaMatches"
import url from "./parametros"
import axios from "axios"

function App() {
  const [telaAtual, setTelaAtual] = useState("inicial")
  
  const renderizarPagina = () => {
    if(telaAtual === "inicial") {

      return <TelaInicial mudarPagina={mudarPagina} limparMatches={limparMatches}/>

    } else if(telaAtual === "matches") {

      return <TelaMatches mudarPagina={mudarPagina} limparMatches={limparMatches}/>

    }
}

  const mudarPagina = (novaPagina) => {
    setTelaAtual(novaPagina) 
  }

  const limparMatches = async () => {
     if (!window.confirm("Você tem certeza que quer limpar os Matches?")) {
      return
    }
    try {
      await axios.put(`${url}/clear`)
      setTelaAtual('inicial')
      setTelaAtual('matches')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        {renderizarPagina()}
    </div>
  );
}

export default App;
