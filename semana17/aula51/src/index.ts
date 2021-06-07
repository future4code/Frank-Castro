import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {generateId} from "./services/idGenerator";
import {generateToken, getTokenData} from "./services/authenticator"
import getUser from "./endpoints/getUsers"
import login from "./endpoints/login";

app.get('/get', getUser);
app.post('/user/signup', createUser);
app.post('/user/login', login);
app.put('/user/edit/', editUser);

