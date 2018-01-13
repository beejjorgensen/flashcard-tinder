/*
 * FILENAME: routes/authRoutes.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-12T17:24:26
 * MODIFIED: 2018-01-13T14:03:32
 * VERSION:  0.0.3
 * ABOUT:    Sets up oauth routes
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:   
 *********************************************************************************/

const passport = require('passport');

module.exports = (app) => {

  const authCheck = (req, res, next) => {
    if (!req.user) {
      res.redirect('/auth/google');
    } else {
      next();
    }
  }
  
  app.get(
    '/',
    authCheck,
    (req, res) => {
      res.status(200).send(req.user);
    });

  app.get('/login', authCheck, (req, res) => {
    res.status(200).send({"logged_in_user": req.user});
  });

  app.get(
    '/auth/google',
    passport.authenticate(
      'google', { scope: ['profile', 'email'] }
    )
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get(
    '/api/current_user', (req, res) => {
      if (req.user)
        res.send(req.user);
      else
        res.send("No current user");
    }
  );

  app.get(
    '/api/logout', (req, res) => {
      req.logout();
      res.send({ "Bye": "From Server" });
    }
  );
}
