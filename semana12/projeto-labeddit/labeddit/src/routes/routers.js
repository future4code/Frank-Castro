import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { LoginPage} from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"
import { FeedPage } from "../pages/FeedPage/FeedPage"
import { PostPage } from "../pages/PostPage/PostPage" 

export const Router = ({setRightButtonText}) => {
    return(
            <Switch>
                <Route exact path="/">
                    <FeedPage />
                </Route>
                <Route exact path="/Posts/:postId">
                    <PostPage />
                </Route>
                <Route exact path="/Login">
                    <LoginPage setRightButtonText={setRightButtonText} />
                </Route>
                <Route exact path="/Register">
                    <RegisterPage setRightButtonText={setRightButtonText} />
                </Route>
                <Route>

                </Route>
            </Switch>
    )
}