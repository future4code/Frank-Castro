import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../componetes/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <RegisterPage />
        </Route>
        <Route exact path="/">
          <FeedPage />
        </Route>
        <Route exact path="/post/:id">
          <PostPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;