require('dotenv').config()
const express = require('express'),
    cors =require('cors'), 
    session = require('express-session'), 
    ctrl = require('./controller'),
    authCtrl = require('./authController'),
    massive =require ('massive'), 
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
    app = express(); 

app.use(express.json()); 
app.use(cors()); 
app.use( session({
    resave: false, 
    saveUninitialized:true, 
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000*60*60*24}
}))


massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`));
})


//auth endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//post endpoints
app.get('/api/posts', ctrl.getAll)
app.post('/api/post', ctrl.addPost)


