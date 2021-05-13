import Button from '@material-ui/core/Button'
import { InputsContainer} from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import axios from "axios"
import BASE_URL from '../../constants/urls';

export const CardForm = () => {
    
    const [form, onChange, clear] = useForm({title: "", text: ""})

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert("Postado com sucesso")
        })
        .catch((err)=>console.log(err))
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost()

    }

    return(
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"title"}
                    value={form.title}
                    label={"Titulo do post"}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
                    type={"text"} 
                />
                <TextField
                    name={"text"}
                    value={form.text}
                    label={"Oque está pensando"}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    type={"text"} 
                />
                <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
                >Postar
                </Button>  
            </form>
        </InputsContainer>
        )
}