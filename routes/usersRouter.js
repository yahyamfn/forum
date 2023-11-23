const router = require('express').Router();
const {addUser,login} =require('.././controllers/userController');


router.post('/register',addUser);
router.post('/login',login);

module.exports=router;
