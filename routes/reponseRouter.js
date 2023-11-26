const router = require('express').Router();
const {getReponses,addReponse,deleteReponse}=require('.././controllers/reponseController');

//router.get('/get',getQuestions);
router.post('/',addReponse);
//router.delete('/delete',deleteQuestion);

module.exports=router;