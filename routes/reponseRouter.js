const router = require('express').Router();
const {getReponses,addReponse}=require('.././controllers/reponseController');

router.post('/',getReponses);
router.post('/add',addReponse);
//router.delete('/delete',deleteQuestion);

module.exports=router;