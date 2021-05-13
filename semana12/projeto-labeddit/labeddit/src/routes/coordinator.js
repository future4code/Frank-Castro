  
export const goToLoginPage = (history) => {
    history.push("/login");
  };
  
  export const goToRegisterPage = (history) => {
    history.replace("/signup");
  };
  
  export const goToFeedPage = (history) => {
    history.replace("/");
  };
  
  export const goToCreatePostPage = (history) => {
    history.replace("/createpost");
  };
  
  export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`);
  };
  
  export const goToPreviousPage = (history) => {
    history.goBack();
  };
