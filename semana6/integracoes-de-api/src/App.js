import React from "react";
import UserListPage from "./components/users"
import FormPage from "./components/form"
 

export default class App extends React.Component {
  state = {
    page: "form"
  };

  changePage = () => {
    if (this.state.page === "form") {
      this.setState({ page: "usersList" });
    } else if (this.state.page === "usersList") {
      this.setState({ page: "form" });
    }
  };

  renderPage = () => {
    switch (this.state.page) {
      case "form":
        return <FormPage />;
      case "usersList":
        return <UserListPage />;
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <div className="App">
      <h1>Labeuser</h1>
      <button onClick={this.changePage}>trocar de página</button>
      {this.renderPage()}
      </div>
    )
  }
}