import { TextField } from "@material-ui/core";
import React from "react"
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button'
import { InputsContainer} from "./styled";
import useForm from "../../hooks/useForm"

export const LoginForm = () => {
  const [form, onChange, clear] = useForm({email: "", password: ""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

  return (
    <div>
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    >Fazer Login
                </Button>
            </form>
        </InputsContainer>
    </div>
  )
}