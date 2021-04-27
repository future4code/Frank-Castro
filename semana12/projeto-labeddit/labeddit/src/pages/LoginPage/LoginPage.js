import React from "react"
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button'
import { goToFeedPage, goToRegisterPage } from "../../routes/coordinator"
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import { LoginForm } from "./LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export const LoginPage = ({rightButtonText, setRightButtonText}) => {
  useUnprotectedPage()
    const history = useHistory()

  return (
    <div>
        <ScreenContainer>
          <LoginForm  rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <SignUpButtonContainer>
          <Button
            onClick={() => goToRegisterPage(history)}
            type={"submit"}
            fullWidth
            variant={"texte"}
            color={"primary"}
            >Ainda não tem um cadastro ?
          </Button>
        </SignUpButtonContainer>
        </ScreenContainer>

    </div>
  )
}