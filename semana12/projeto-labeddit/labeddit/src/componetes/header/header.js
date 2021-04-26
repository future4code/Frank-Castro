import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from "./styled"
import { useHistory } from "react-router";
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"

const Header = () => {
  const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToFeedPage(history)} color="inherit">
            Labeddit
          </Button>
          <Button onClick={() => goToLoginPage(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header;
