const express = require ('express');
const bodyParser = require('body-Parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  	client: 'pg',
  	connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '198933jone',
    database : 'smart_brain'
  }
});

// const path = require('path'); //it's a core module, do not need to install
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
	res.send(database.users)
})

app.post('/signin',signin.handleSignin(db,bcrypt))
app.post('/register',register.handleRegister(db,bcrypt))
app.get('/profile/:id',profile.handleProfile(db))
app.put('/image',image.handleImage(db))
app.post('/imageurl',image.handleApiCall)


const DATABASE_URL = process.env.DATABASE_URL
app.listen(DATABASE_URL||3000,()=>{
	console.log(`Server is listening on port ${DATABASE_URL}`);
})


