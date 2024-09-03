const mongoose = require('mongoose');


const Project=new mongoose.Schema({
      
      name:String,
      created:Date,
      description:String,
      link:String,
      category:String,
      github:String,
      src:String,
      tags:{type:[String]}
})
const Projects=mongoose.model('Projects',new mongoose.Schema({
      language:String,
      entries:[Project]
}))

const Skills=mongoose.model('Skills',new mongoose.Schema({
      
    name:String,
    sub:[String],
    proficiency:Number,
 }))

const Experience=mongoose.model('Experience',new mongoose.Schema({
      
    org:String,
    created:Date,
    description:String,
    link:String,
    role:String,
}))
const Achievements=mongoose.model('Achievements',new mongoose.Schema({
      
    name:String,
    created:Date,
    description:String,
    src:String,
  
}))
const Profile=mongoose.model('Profile',new mongoose.Schema({
      
    name:String,
    born:String,
    src:String,
    role:String,
    datapoints:{
        type:Object
    }
}))
const Contacts=mongoose.model('Messages',new mongoose.Schema({
    name:String,
    email:String,
    message:String
},{timestamps:true}))


module.exports= {Achievements,Profile,Experience,Skills,Projects,Contacts}; 