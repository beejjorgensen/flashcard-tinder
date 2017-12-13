const express = require('express');
const authRoutes = require('./vroutes/auth-routes');
const passportSetup = require('./vconfig/passport-setup');
const mongoose = require('mongoose');
const keys = require('./vconfig/keys');
const app = express();

// set up view engine
app.set('view engine', 'ejs');

mongoose.connect(keys.mongodb.dbURI, {useMongoClient: true}, (err) => {
  if (err) return console.log(err);
  console.log('Connected to FlashCards DataBase!');
});

// set up auth routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3001, () => {
  console.log('app now listening for requests on port 3001');
});