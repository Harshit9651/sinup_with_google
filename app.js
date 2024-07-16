const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
app.use(cors(
{
  origin:"http://localhost:3000"
}
))
require('./connection/server')

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: '7sRSqTv3FcINdswpi8wP1KJw2lBPUBIz',
  issuerBaseURL: 'https://dev-i5biv4rzh0seh7av.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
dotenv.config();




// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// Protected route to fetch user data
app.get('/user', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.json(req.oidc.user); // This will send the user information as JSON
  } else {
    res.status(401).json({ error: 'User not authenticated' });
  }
});