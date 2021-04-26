import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { LoginPage} from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"
import { FeedPage } from "../pages/FeedPage/FeedPage"
import { PostPage } from "../pages/PostPage/PostPage" 
import Header from "../componetes/header/header"

export const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <FeedPage />
                </Route>
                <Route exact path="/Post">
                    <PostPage />
                </Route>
                <Route exact path="/Login">
                    <LoginPage />
                </Route>
                <Route exact path="/Register">
                    <RegisterPage />
                </Route>
                <Route>

                </Route>
            </Switch>
        </BrowserRouter>
    )
}