// const router = require('express').Router();

// const authCheck = (req, res, next) => {
//   if(!req.user){
//     // if user is not logged in, redirect to login screen
//     res.redirect('/auth/login');
//   } else {
//     next();
//   }
// };

// // if a user is logged in, return the current user object
// router.get('/current_user', (req, res) => {
//   console.log('Inside Profile-Routes CURRENT USER: ', req.user);
//   res.send(req.user);
// });

// router.get('/', authCheck, (req, res) => {
//   res.render('profile', { user: req.user});
// });

// module.exports = router;