import React from "react"
import { useHistory } from "react-router";

export const FeedPage = () => {
    const history = useHistory()
  return (
    <div>
        <p>FeedPage</p>
        <button>ir</button>
        <button onClick={history.goBack}>voltar</button>
    </div>
  )
}