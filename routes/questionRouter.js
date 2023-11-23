const router = require('express').Router();
const {getQuestions,addQuestion}=require('.././controllers/questionController');

router.get('/get',getQuestions);
router.post('/add',addQuestion);

module.exports=router;