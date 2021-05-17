import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state ={
    posts: [
      {
      nomeUsuario: "paulinha",
      fotoUsuario:  'https://picsum.photos/50/50?a=1',
      fotoPost: 'https://picsum.photos/200/150?a=1'
      },
      {
        nomeUsuario: "Láis",
        fotoUsuario:  'https://picsum.photos/50/50?a=2',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: "Mandinha",
        fotoUsuario:  'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=3'
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaPost = () => {

    const novoPost = {

      nomeUsuario: this.state.valorInputNomeUsuario,

      fotoUsuario: this.state.valorInputFotoUsuario,

      fotoPost: this.state.valorInputFotoPost
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({ pessoas: novoPosts });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };
  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
        return (
          <Post 
          key={post.nomeUsuario}
           nomeUsuario={post.nomeUsuario}
           fotoUsuario={post.fotoUsuario}
           fotoPost={post.fotoPost}
         />
        )
      })
      return (
        <div className="app-container">
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome Usuario"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"foto post"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"foto usuario"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        {listaDePosts}
        </div>
      )
    }

}


export default App;
