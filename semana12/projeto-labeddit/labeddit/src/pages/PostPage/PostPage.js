import React from "react"
import { useHistory } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";

export const PostPage = () => {
  useProtectedPage()
    const history = useHistory()
  return (
    <div>
        <p>PostPage</p>
        <button>ir</button>
        <button onClick={history.goBack}>voltar</button>
    </div>
  )
}