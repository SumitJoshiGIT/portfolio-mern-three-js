const express=require('express');
const {Achievements,Profile,Experience,Skills,Projects,Contacts}=require('./models')
const csurf=require('csurf');
const cors=require('cors');
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
 
const app=express();
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'../','client','dist')))

app.use(cors())

app.get('/',async(req, res) => {
    return res.sendFile(path.join(__dirname,'../','client','dist','index.html'));
})

app.get('/Projects', async (req, res) =>{
    return res.status(200).json((await Projects.find()));
    
});
app.get('/Skills', async(req, res) => {
    return res.status(200).json((await Skills.find()));

});
app.get('/Experience', async(req, res) => {
    return res.status(200).json((await Experience.find()));
});

app.get('/Achievements', async(req, res) => {
    return res.status(200).json((await Achievements.find()));
});

app.get('/Profile', async(req, res) => {
    return res.status(200).json((await Profile.findOne()));
});

app.post('/contact',async(req,res)=>{
 
    const inst=new Contacts({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message,
    })
    await inst.save();
    res.status(200).send('{msg:success}')
})

mongoose.connect('mongodb://localhost/myPortfolioDB').
    then(()=>app.listen(3000,()=>{console.log("started")})).
    catch(()=>console.log("cannot connect to Mongo  "))
    

