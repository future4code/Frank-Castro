import React from "react"
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import { RegisterForm } from "./RegisterForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export const RegisterPage = ({setRightButtonText} ) => {
  useUnprotectedPage()
  return (
    <div>
       <ScreenContainer>
          <RegisterForm setRightButtonText={setRightButtonText} />
        </ScreenContainer>
    </div>
  )
}