const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    // options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    // check if user record already exists in our db
    User.findOne({googleId: profile.id}).then((currentUser) => {
      if(currentUser){
        // we already have a record with the given user ID in our database
        console.log('User is: ', currentUser);
        done(null, currentUser);
      } else {
        // we don't have a user record with this ID, so create a new user record in our database
        new User({
          username: profile.displayName,
          googleId: profile.id,
          thumbnail: profile._json.image.url
        }).save().then((newUser) => {
          console.log('new user created:' + newUser);
          done(null, newUser);
        });
      }
    });
    
    
  })
)