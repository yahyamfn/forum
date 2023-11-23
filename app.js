const express = require('express');
const app = express();
const mongoose = require("mongoose");
const userRoutes = require('./routes/usersRouter');
const questionRoutes = require('./routes/questionRouter');
const bodyParser = require('body-parser');
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

/*app.use(session({
  secret: bcrypt.hash(req.u,10),
  resave:false,
  saveUninitialized: true,
  cookie: { maxAge: 60000},
}))

app.use('/session', sess);
*/
app.set('view engine','pug');
app.get('/register',(req,res)=>{
    res.render('register');
})

app.get('/login',(req,res)=>{
    res.render('login');
})
app.get('/home',(req,res)=>{
  res.render('home');
})
app.get('/questions',(req,res)=>{
  res.render('question');
})

app.listen(3000, () => console.log(`App listening on port 3000!`));