import React from "react"; 
import axios from "axios";
import styled from "styled-components";
import { UserPage } from "./components/users";
import { FormPage } from "./components/form";

class App extends React.Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  changePage = () => {
    this.props.updatePage();
  };

  getUserList = () => {
    axios 
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            authorization: "frank-castro-cruz"
          }
        }
      ).then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      })
  }

  render () {
    return (
      
      <UserPage/>
    )
  }

}

export default App;
