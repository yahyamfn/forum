const router = require('express').Router();
const {getQuestions,addQuestion,deleteQuestion}=require('.././controllers/questionController');

router.get('/get',getQuestions);
router.post('/',addQuestion);
router.delete('/delete',deleteQuestion);

module.exports=router;