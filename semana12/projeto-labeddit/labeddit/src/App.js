import React, { useState } from "react"
import { Router } from "./routes/routers"
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./constants/thema"
import Header from "./componetes/header/header"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  const token = localStorage.getItem("token") 
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")


  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
          <Router setRightButtonText={setRightButtonText} /> 
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App;
