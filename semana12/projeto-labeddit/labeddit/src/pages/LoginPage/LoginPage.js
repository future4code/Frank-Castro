import React from "react";
import { ScreenContainer, SignUpButtonContainer, LogoImage } from "./styled";
import logo from "../../assets/images/logo.png";
import Button from "@material-ui/core/Button";
import LoginForm from "./LoginForm";
import { goToRegisterPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import AlertModified from "../../componetes/Alert";

const LoginPage = () => {
  useUnprotectedPage();
  const history = useHistory();
  return (
    <ScreenContainer>
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          onClick={() => goToRegisterPage(history)}
        >
          Sign Up
        </Button>
      </SignUpButtonContainer>
      <AlertModified />
    </ScreenContainer>
  );
};

export default LoginPage;