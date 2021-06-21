export type user = {
   id: string
   name: string
   email: string
   password: string
}

export type userInfo = {
   id: string;
   name: string;
   email: string;
 };

 export type recipe = {
   title: string;
   description: string;
 };

 export type recipeInfo = {
   id: string;
   title: string;
   description: string;
   createdAt: string;
 };
 
 export type recipeFullInfo = {
   id: string;
   user_id: string;
   title: string;
   description: string;
   createdAt: string;
 };