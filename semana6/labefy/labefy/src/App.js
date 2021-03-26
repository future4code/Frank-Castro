import React from "react"; 
import axios from "axios";
import DeletaPlaylist from "./paginas/deletaPlaylist"
import CriaPlaylist from "./paginas/criaPlaylist"
import styled from "styled-components"

export default class App extends React.Component {
  state = {
    page: "criar"
  };

  changePage = () => {
    if (this.state.page === "criar") {
      this.setState({ page: "delete" });
    } else if (this.state.page === "delete") {
      this.setState({ page: "criar" });
    }
  };

  renderPage = () => {
    switch (this.state.page) {
      case "criar":
        return <CriaPlaylist />;
      case "delete":
        return <DeletaPlaylist />;
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <div className="App">
      <Corpo>  
      <Header>
      <h1>labefy</h1>
      <Botao onClick={this.changePage}>trocar de página</Botao>
      </Header>
      {this.renderPage()}
      </Corpo>
      </div>
    )
  }
}

const Corpo = styled.div`
`

const Header = styled.header`
display: flex;
justify-content: space-between;
border: 1px solid black;
text-align: center;
padding: 10px;
`

const Botao = styled.button`
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: arial,sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
}
body, input, button {
    font-size: 14px;
    font-family: arial,sans-serif;
    color: #222;
`