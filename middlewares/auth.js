const session = require('express-session');
const router = require('express').Router();
const bcrypt = require('bcrypt');

function auth(req,res){
    
}

router.get('/createSession', (req, res) => {
    req.session.user = {
      username: 'example_user',
      email: 'user@example.com',
    };
});

router.get('/geSsession',(req,res)=>{
    const user = req.session.user;
  if (user) {
    res.json(user);
  } else {
    res.send('Session not found');
  }
})

router.post('/logout', (req, res) => {
    req.session.destroy(() => {
      res.send('Logout successful!');
    });
});

module.exports=router;