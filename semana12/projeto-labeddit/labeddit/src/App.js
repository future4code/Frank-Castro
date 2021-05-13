import React from "react";
import Router from "./routes/routers";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/thema";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
};

export default App;