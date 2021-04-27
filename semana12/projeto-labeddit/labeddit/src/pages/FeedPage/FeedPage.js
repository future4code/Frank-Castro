import React from "react"
import { useHistory } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";

export const FeedPage = () => {
  useProtectedPage()
    const history = useHistory()
  return (
    <div>
        <h1>FeedPage</h1>
    </div>
  )
}