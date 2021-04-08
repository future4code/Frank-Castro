import React from "react"; 
import axios from "axios"; 
import styled from "styled-components"
import { axiosConfig, baseUrl } from "../parametros";

export default class DeletaPlaylist extends React.Component {
    state = {
        playlists: []
    };

    componentDidMount() {
        this.lerPlaylist();
    }

    lerPlaylist = () => {
        axios
        .get(baseUrl, axiosConfig)
        .then((res) => {
            this.setState({ playlists: res.data.result.list }); console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
        }); 
    }

    deletePlaylist = (id) => {
        if (window.confirm("Deseja mesmo deletar o usuário?")) {
          axios
            .delete(
              `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
              axiosConfig
            )
            .then((res) => {
              this.lerPlaylist();
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
    

      render() {
        const mapPlaylist = this.state.playlists.map((playlist) => {
          return (
            <div key={playlist.id}>
              <P>{playlist.name}</P>
              <button onClick={() => this.deletePlaylist(playlist.id)}>Deletar</button>
            </div>
          );
        });
        console.log(this.state.playlists)
        return (
          <Corpo>
            <h2>Lista de Playlist</h2>
            <Lista>
            {mapPlaylist}
            </Lista>
          </Corpo>
        );
      }
    }
    
const Corpo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const P = styled.li`
display: flex;
flex-direction: column;
/* justify-content: space-between; */
`

const Lista = styled.div`
display: flex;
flex-direction: column;
width: 250px;
justify-content: space-between;
border: 1px solid black;
text-align: center;
padding: 10px;

`