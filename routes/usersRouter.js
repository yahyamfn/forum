const router = require('express').Router();
const {addUser,login,logout} =require('.././controllers/userController');


router.post('/',addUser);
router.post('/login',login);
router.get('/logout',logout);

module.exports=router;
