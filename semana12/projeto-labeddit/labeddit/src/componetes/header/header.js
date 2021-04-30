import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from "./styled"
import { useHistory } from "react-router";
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"

const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token") 
  const history = useHistory()
  
  const logout = () => {
    localStorage.removeItem("token")
 }

  const rightButtonAction = () => {
    if (token){
        logout()
        setRightButtonText("Login")
        goToLoginPage(history)
    } else {
      goToLoginPage(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToFeedPage(history)} color="inherit">
            Labeddit
          </Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header;
