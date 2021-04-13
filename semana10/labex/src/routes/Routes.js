import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ErrorPage from "../pages/ErrorPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/home-adm">
                    <AdminHomePage />
                </Route>
                <Route exact path="/criar-viagem">
                    <CreateTripPage />
                </Route>
                <Route exact path="/aplicação-formulario">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/lista-viagens">
                    <ListTripsPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/detalhes-viagem">
                    <TripDetailsPage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>

        </BrowserRouter>
    )

}

export default Router;