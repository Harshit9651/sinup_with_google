const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const connectFlash = require('connect-flash');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

require('./config/password.js')(passport);



app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(connectFlash());

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
