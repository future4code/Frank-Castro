export const goToAdminHomePage = (history) => {
    history.push("/home-adm")
}
export const goToCreateTripPage = (history) => {
    history.push("/criar-viagem")
}
export const goToApplicationFormPage = (history) => {
    history.push("/aplicação-formulario")
}
export const goToListTripsPage = (history) => {
    history.push("/lista-viagens")
}
export const goToLoginPage = (history) => {
    history.push("/login")
}
export const goToTripDetailsPage = (history) => {
    history.push("/detalhes-viagem")
}
export const goToHomePage = (history) => {
    history.push("/")
}

export const goToLastPage = (history) => {
    history.goBack();
  };