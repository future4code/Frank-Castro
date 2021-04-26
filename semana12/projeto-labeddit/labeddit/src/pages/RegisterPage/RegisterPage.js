import React from "react"
import { useHistory } from "react-router";
import { goToFeedPage } from "../../routes/coordinator"

export const RegisterPage = () => {
    const history = useHistory()
  return (
    <div>
        <p>RegisterPage</p>
        <button onClick={() => goToFeedPage(history)}>ir</button>
        <button onClick={history.goBack}>voltar</button>
    </div>
  )
}