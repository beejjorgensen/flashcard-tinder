// const router = require('express').Router();
const passport = require('passport');

module.exports = app => { 
  
    // auth with google
    app.get('/auth/google', 
    passport.authenticate('google', {
      scope: ['profile']
      
    })
  );

  // callback route for google to redirect to
  app.get('/auth/google/redirect', 
  passport.authenticate('google'), 
  (req, res) => {
    // you reached the callback URI. What page route do we want to display upon a successful login?
    // res.send(req.user);
    // console.log('auth/google/redirect', req);
    res.redirect('/');
    // res.redirect('/profile/');
  });


  // auth logout
  app.get('/api/logout', (req, res) => {
    // handle with passport
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    console.log('Inside Auth-Routes CURRENT USER: ', req.user);
    res.send(req.user);
  });
  // IMPORT FROM PROFILE-ROUTES THESE MAY NOT BE NECESSARY
  // const authCheck = (req, res, next) => {
  //   if(!req.user){
  //     // if user is not logged in, redirect to login screen
  //     res.redirect('/auth/login');
  //   } else {
  //     next();
  //   }
  // };
  
  // .get('/', authCheck, (req, res) => {
  //   res.redirect('profile', { user: req.user});
  // });
};
