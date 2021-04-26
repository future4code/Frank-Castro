import React from "react"
import { useHistory } from "react-router";

export const PostPage = () => {
    const history = useHistory()
  return (
    <div>
        <p>PostPage</p>
        <button>ir</button>
        <button onClick={history.goBack}>voltar</button>
    </div>
  )
}