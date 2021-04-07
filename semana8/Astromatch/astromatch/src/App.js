import React, {useState, useEffect} from "react"
import TelaInicial from "./paginas/TelaInicial"
import TelaMatches from "./paginas/TelaMatches"

function App() {
  const [telaAtual, setTelaAtual] = useState("inicial")
  

  const renderizarPagina = () => {
    if(telaAtual === "inicial") {
      return <TelaInicial 
          mudarPagina={mudarPagina}
        />
    } else if(telaAtual === "matches") {
      return <TelaMatches
          mudarPagina={mudarPagina}
      />
    }
}

  const mudarPagina = (novaPagina) => {
    setTelaAtual(novaPagina) 
  }

  return (
    <div className="App">
        {renderizarPagina()}
    </div>
  );
}

export default App;
