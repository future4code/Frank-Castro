import React, { useEffect, useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const { rightButtonText, setRightButtonText, token } = useContext(
    GlobalStateContext
  );

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLoginPage(history);
    } else {
      goToLoginPage(history);
    }
  };

  useEffect(() => {
    if (token) {
      setRightButtonText("Logout");
    } else {
      setRightButtonText("Login");
    }
  }, [token, setRightButtonText]);

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeedPage(history)} color="inherit">
          LabEddit
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;