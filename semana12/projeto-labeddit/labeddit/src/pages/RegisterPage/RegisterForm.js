import { TextField } from "@material-ui/core";
import React from "react"
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer} from "./styled";
import useForm from "../../hooks/useForm"
import { signUp } from "../../requests/resquestsLabeddit";

export const RegisterForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ username: '', email: '', password: '' })
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText)
    }

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.username}
            name={'username'}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >Fazer Cadastro
        </Button>
      </SignUpFormContainer>
    </form>
  )
}