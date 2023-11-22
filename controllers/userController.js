const User = require('.././models/User');
const bcrypt = require('bcrypt');

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
            res.send('Saved!');
        }
    }catch(err){
        res.send(err)
    }
}

module.exports={addUser};