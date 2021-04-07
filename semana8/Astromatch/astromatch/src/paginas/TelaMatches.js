import React, {useState, useEffect} from "react"

function TelaMatches(props) {
    return(
        <div>
        <h1>Tela Matches</h1>
        <button onClick={() => props.mudarPagina("inicial")}>Tela inicial</button>
        </div>
    )
}

export default TelaMatches;