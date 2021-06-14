import app from "./comtroller/app"
import createUser from './data/user/createUser'
import login from './data/user/login'
import getUser from './data/user/getUser'

app.post('/user/signup', createUser);
app.post('/user/login', login);
app.get('/user/getUser', getUser);