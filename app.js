const express = require('express');
const app = express();
const mongoose = require("mongoose");
const userRoutes = require('./routes/usersRouter');
const questionRoutes = require('./routes/questionRouter');
const reponseRoutes = require('./routes/reponseRouter');
const bodyParser = require('body-parser');
const Question = require('./models/Question');
const Reponse = require('./models/Reponse');
const bcrypt = require('bcrypt');
const session = require('express-session');
const sess = require('./middlewares/auth');
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/forum")
.then(()=> console.log('Connected to MongoDB!'))
.catch((err)=>console.log(err))

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users',userRoutes);
app.use('/questions',questionRoutes);
app.use('/reponses',reponseRoutes);


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
  //const reponses = await Reponse.find({descriptionQuestion:descriptionQuestion});
  //res.render('question',{reponses:reponses,descriptionQuestion:descriptionQuestion});
  res.render('question');
})

app.listen(3000, () => console.log(`App listening on port 3000!`));