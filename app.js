const express = require('express');
const authRoutes = require('./vroutes/auth-routes');
const profileRoutes = require('./vroutes/profile-routes');

const passportSetup = require('./vconfig/passport-setup');
const mongoose = require('mongoose');
const keys = require('./vconfig/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

// set up temporary view engine. remove once we connect to actual frontend
app.set('view engine', 'ejs');

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongodb.dbURI, {useMongoClient: true}, (err) => {
  if (err) return console.log(err);
  console.log('Connected to FlashCards DataBase!');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// create home route
app.get('/', (req, res) => {
  res.render('home', { user: req.user});
});

app.listen(3001, () => {
  console.log('app now listening for requests on port 3001');
});