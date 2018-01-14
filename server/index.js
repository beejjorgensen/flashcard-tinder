/*
 * FILENAME: index.js
 * PROJECT:  flashcards-tinder
 * CREATED:  2018-01-12T16:44:14
 * MODIFIED: 2018-01-13T18:32:04
 * VERSION:  0.0.4
 * ABOUT:    flashcard-tinder server entry-point
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, Wesley Harvey
 * NOTES:   
 *********************************************************************************/
require('dotenv').config();
const keys = require('./config/keys');

/*********************
  EXPRESS REQUIREMENTS
 *********************/
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');

/*********************
  APPLICATION SERVER
 *********************/
/* Heroku will dynamically allocate a PORT */
const PORT = process.env.PORT || process.env.DEV_PORT;
const app = express();

/********************
 * COOKIE-SESSION
 ********************/
/* Keep for 24 hours*/
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

/********************
 * PASSPORT 
 ********************/
app.use(passport.initialize());
/* must be placed after app.use(session()) */
app.use(passport.session());

// Set CORS here
app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Credentials", "true");
      next();
});

/********************
 * INITIALIZE LOCAL
 ********************/
require('./models/User');
require('./models/Card');
require('./services/passport');
require('./routes/authRoutes')(app);
require('./routes/cardsRoutes')(app);

/********************
 * START SERVER
 ********************/
app.listen(PORT, (err) => {
  if (err) return console.log(`ERROR port ${PORT}`);
  console.log(`Studdy Buddy now listening for requests on port ${PORT}`);
});
 
/********************
 * START MONGOOSE
 ********************/
mongoose.Promise = Promise;
mongoose.connect(
  keys.mongoURI, {
    useMongoClient: true
  }
);

/*********************
 PRODUCTION ENVIRONMENT
*********************/
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(
      __dirname, 'client', 'build', 'index.html'
    ));
  });
}
