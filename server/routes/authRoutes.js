/*
 * FILENAME: routes/authRoutes.js
 * PROJECT:  flashcard-tinder
 * CREATED:  2018-01-12T17:24:26
 * MODIFIED: 2018-01-12T17:24:33
 * VERSION:  0.0.1
 * ABOUT:    Sets up oauth routes
 * AUTHORS:  Steven O'Campo, Dan Winslow, Latoyya Smith, John Wells, Wesley Harvey
 * NOTES:   
 *********************************************************************************/

const passport = require('passport');

module.exports = (app) => {

//   const authCheck = (req, res, next) => {
//     if (!req.user) {
//       res.redirect('/auth/google');
//     } else {
//       next();
//     }
//   }
  
//   app.get('/', authCheck, (req, res) => {
//     res.send('profile', { user: req.use });
//   });

//   app.get('/login', (req, res) => {
//     res.send('login', {user: req.user});
//   });

//   app.get(
//     '/logout',
//     (req, res) => {
//       req.logout();
//       res.redirect('/');
//     }
//   );

  app.get(
    '/', (req, res) => {
      res.send({ "Hi": "from Server" });
    }
  );

  app.get(
    '/auth/google',
    passport.authenticate(
      'google', { scope: ['profile', 'email'] }
    )
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'), (req, res) => {
      res.redirect('/');
    }
  );

  app.get(
    '/api/current_user', (req, res) => {
      res.send(req.googleId);
    }
  );

  app.get(
    '/api/logout', (req, res) => {
      req.logout();
      res.send({ "Bye": "From Server" });
      //res.redirect('/');
    }
  );
}





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
