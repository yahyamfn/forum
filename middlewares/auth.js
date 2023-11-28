const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

/*const login = (req,res)=>{
  const { email } = req.body.email;
  req.session.email = email;
}

const logout = (req, res)=>{
  req.session.destroy(err => {
    if (err) {
      console.error(err);
    } else {
      res.redirect('/login');
    }
  });
}

const checkAuth = (req, res) => {
  // Check if the user is authenticated
  if (req.session) {
    // If authenticated, add user information to locals
    res.locals.isAuthenticated = true;
    res.locals.email = req.session.email;
    res.rendirect('home');
  } else {
    // If not authenticated, set isAuthenticated to false
    res.locals.isAuthenticated = false;
    res.render('.././views/login.pug');
  }
};
*/
//module.exports = ;