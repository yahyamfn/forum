const express = require('express');
const app = express();
const mongoose = require("mongoose");
const userRoutes = require('./routes/usersRouter');
const questionRoutes = require('./routes/questionRouter');
const reponseRoutes = require('./routes/reponseRouter');
const bodyParser = require('body-parser');
const Question = require('./models/Question');
const Reponse = require('./models/Reponse');
const session = require('express-session');
//const auth = require('./middlewares/auth');

mongoose.connect("mongodb://127.0.0.1:27017/forum")
.then(()=> console.log('Connected to MongoDB!'))
.catch((err)=>console.log(err))

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users',userRoutes);
app.use('/questions',questionRoutes);
app.use('/reponses',reponseRoutes);
//app.use(auth);


app.set('view engine','pug');


app.get('/register',(req,res)=>{
    res.render('register');
})
app.get('/login',(req,res)=>{
    res.render('login');
})
app.get('/home',async (req,res)=>{
  if(req.session.user){
    const questions = await Question.find().sort({ createdAt: 'desc' });
    res.render('home',{questions:questions});
  }else{
    res.render('login');
  }
})
app.get('/question',async (req,res)=>{
  //const reponses = await Reponse.find({descriptionQuestion:descriptionQuestion});
  //res.render('question',{reponses:reponses,descriptionQuestion:descriptionQuestion});
  if(req.session.user){
    const condition = true;
    res.render('/question',{condition : condition,email:email});
  }else{
    res.redirect('/login');
  }
})
app.get('/users/login',(req,res)=>{
  res.redirect('/home');
})
app.get('/',(req,res)=>{
  if(req.session.user){
    res.redirect('/home');
  }else{
    res.redirect('/login');
  }
})

app.listen(3000, () => console.log(`App listening on port 3000!`));