export const goToFeedPage = (history) => {
    history.push("/")
}
export const goToPostPage = (history, postId) => {
    history.push(`/Posts/${postId}`)
}
export const goToLoginPage = (history) => {
    history.push("/Login")
}
export const goToRegisterPage = (history) => {
    history.push("/Register")
}