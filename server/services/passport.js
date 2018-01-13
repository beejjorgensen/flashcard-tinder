/*
 * FILENAME:  passport.js
 * PROJECT:   flashcards-tinder
 * CREATED:   2018-01-12T17:25:32
 * MODIFIED:  2018-01-12T17:25:37
 * VERSION:   0.0.1
 * ABOUT:     Handles Passport functionality
 * AUTHORS:   Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:    
 *********************************************************************************/

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config//keys');
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID:     keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL:  keys.googleCallbackURL,
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("LOOKING");
      User.findOne({ googleId: profile.id }).then(
        (existingUser) => {
          if (existingUser) {
            console.log('Existing user is: ', existingUser);
            done(null, existingUser);
          } else {
            console.log(`Creating new user for ${profile} with profile id: ${profile.id}`);
            new User(
              {
                username: profile.displayName,
                googleId: profile.id,
                thumbnail: profile._json.image.url
              }
            ).save().then(
              (newUser) => {
                console.log('new user created:' + newUser);
                done(null, newUser);
              }
            );
          }
        }
      )
    }
  )
);

passport.serializeUser(
  (user, done) => {
    done(null, user.id);
  }
);

passport.deserializeUser(
  (id, done) => {
    User.findById(id).then(
      user => {
        done(null, user);
      }
    );
  }
);
