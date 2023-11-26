const express = require('express');
const app = express();
const mongoose = require("mongoose");
const userRoutes = require('./routes/usersRouter');
const questionRoutes = require('./routes/questionRouter');
const reponseRoutes = require('./routes/reponseRouter');
const bodyParser = require('body-parser');
const Question = require('./models/Question');
const bcrypt = require('bcrypt');
const session = require('express-session');
const sess = require('./middlewares/auth');
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/forum")
.then(()=> console.log('Connected to MongoDB!'))
.catch((err)=>console.log(err))

/*app.get('/users',(req,res)=>{
    
})*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users',userRoutes);
app.use('/questions',questionRoutes);
app.use('/reponses',reponseRoutes);
//app.post('/users', async (req, res) => {
  //  try {
      // Create a new document using the FormData model
    //  const formData = new FormData({
      //  name: req.body.name,
        //email: req.body.email,
        //password: req.body.password,
      //});
  
      // Save the document to MongoDB
 //     await formData.save();
  
   //   res.send('Form submitted and data saved to MongoDB!');
    //} catch (error) {
      //res.status(500).send('Error saving data to MongoDB');
    //}
  //});



app.set('view engine','pug');
app.get('/register',(req,res)=>{
    res.render('register');
})

app.get('/login',(req,res)=>{
    res.render('login');
})
app.get('/home',async (req,res)=>{
  const questions = await Question.find().sort({ createdAt: 'desc' });
  res.render('home',{questions:questions});
})
app.get('/question',async (req,res)=>{
  //const description = req.body.description;
  const description = "hello yahya";
  //console.log(req.body);
  const question = await Question.findOne({description:description});
  //console.log(question);
  const reponses = question.reponses;
  console.log(reponses.date);
  console.log(reponses.email);
  console.log(typeof(reponses.description));
  res.render('question',{question:question,reponses:reponses});
})

app.listen(3000, () => console.log(`App listening on port 3000!`));