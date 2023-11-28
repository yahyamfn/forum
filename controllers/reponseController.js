const Question = require('.././models/Question');
const Reponse = require('.././models/Reponse');

async function addReponse(req,res){
    try {
        //console.log(req.body.descriptionReponse);
        const descriptionQuestion = req.body.description;
        //const questionDate = req.body.date;
        const descriptionReponse = req.body.descriptionReponse;
        //const questionEmail = req.body.email;
        const reponseEmail = 'wa7d l email';
        const date = new Date();
        /*const reponse = {
            date:date,
            email:questionEmail,
            description:descriptionReponse,
            questionDesc: descriptionQuestion
        };*/
        if(descriptionReponse === ""){
            res.send('Please enter a valid response !');
        }else{
            const newReponse = await Reponse.create({date:date,email:reponseEmail,description:descriptionReponse,questionDesc:descriptionQuestion});
            //console.log(newReponse);
            await newReponse.save();
            console.log('New response created !');
            //res.render('question',);
        }
    } catch (error) {
        console.log(error);
    }
}


async function getReponses(req,res){
    //console.log(req.body);
    const descriptionQuestion = req.body.description;
    const reponses = await Reponse.find({descriptionQuestion:descriptionQuestion});
    res.render('question',{reponses:reponses,descriptionQuestion:descriptionQuestion});
}

module.exports={addReponse,getReponses};