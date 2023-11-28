const User = require('.././models/User');
const bcrypt = require('bcrypt');
const auth = require('.././middlewares/auth');
const express = require('express');
const app= express();
const session = require('express-session');

app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: true,
    })
  );

async function addUser(req, res){
    try{
        const {nom,email,password,repassword} = req.body;
       /* const findUser = User.find((x)=>x.email === email);
        if(findUser){
            res.status(400).send('Email or password invalid!')
            console.log('invalid password or email');
            return
        }*/
        if(repassword != password){
            res.send('Passwords dosen\'t match');
        }else{
            const data = {
                nom: nom,
                email: email,
                password: password
            }
            const usr = new User(data);
            const cryptedPass = await bcrypt.hash(password,10);
            usr.password = cryptedPass;
            await usr.save();
            window.location.href='/login';
        }
    }catch(err){
        res.send(err)
    }
}


async function login(req,res){
    try {
        const {email,password}=req.body;
        const data = {
            email: email,
            password: password
        }
        const user = await User.findOne({email: email});
        if(user){
            validPass = await bcrypt.compareSync(password , user.password );
            if(!validPass){
                res.send('Invalid email or password!');
            }else{
                req.session.user = user;
                //req.session.authorized = true;
                console.log('Connected!');
                //console.log(req.session.user);
                //req.isAuthenticated();
                res.redirect('/home');
                //res.render('home');
                //req.session.email = email;
            }
        }else{
            res.send('Invalid email or password!');
        }
    } catch (error) {
        res.send(error);
    }
}


async function logout(req,res){
        await req.session.destroy();
        res.redirect('/login');
    };

module.exports={addUser,login,logout};