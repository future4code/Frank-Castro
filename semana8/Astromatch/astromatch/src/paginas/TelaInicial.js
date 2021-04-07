import React, {useState, useEffect} from "react"

function TelaInicial(props) {

    return(
        <div>
            <h1>Tela Inicial</h1>
            <button onClick={() => props.mudarPagina("matches") } >matches</button>
        </div>
    )
}

export default TelaInicial;