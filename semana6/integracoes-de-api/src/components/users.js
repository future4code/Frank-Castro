import React from "react";
import axios from "axios";
import styled from "styled-components"
import { axiosConfig, baseUrl } from "../parameters";

const ListConteiner = styled.ul`

`
const Titulo = styled.h2`
width: 192px; 
  margin-left: auto;
  margin-right: auto;
`

const List = styled.li`
  width: 700px; 
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 20%;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px 0;
`
const Button = styled.button`
   
`


export default class UserListPage extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
        axios
        .get(baseUrl, axiosConfig)
        .then((res) => {
            this.setState({ users: res.data });
        })
        .catch((err) => {
            console.log(err);
        }); 
    }

    deleteUser = (id) => {
        if (window.confirm("Deseja mesmo deletar o usuário?")) {
          axios
            .delete(
              `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
              axiosConfig
            )
            .then((res) => {
              this.getAllUsers();
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };

    render() {
        const mapUsers = this.state.users.map((user) => {
            return (
              <List key={user.id}>
                <ul>{user.name}</ul>
                <Button onClick={() => this.deleteUser(user.id)}>X</Button>
              </List>
            );
          });
        return(
            <ListConteiner>
                <Titulo>Lista de Usuários</Titulo>
                {mapUsers}
            </ListConteiner>
        )
    }
}