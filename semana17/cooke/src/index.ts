import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {generateId} from "./services/idGenerator";
import {generateToken, getTokenData} from "./services/authenticator"
import getUser from "./endpoints/getUsers"
import login from "./endpoints/login";
import getProfile from "./endpoints/getProfile";
import getOtherUserProfile from "./endpoints/getOtherUserProfile";
import createRecipe from "./endpoints/createRecipe";

app.get('/get', getUser);
app.get('/user/profile', getProfile);
app.get('/user/otherUserProfile', getOtherUserProfile);
app.post('/user/signup', createUser);
app.post('/user/createRecipe', createRecipe);
app.post('/user/login', login);
app.put('/user/edit/', editUser);

