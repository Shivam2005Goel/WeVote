const express = require('express');
const router = express.Router();
const User = require('../../models/Admin.js');
const User1 = require('../../models/Voter.js');
const User2 = require('../../models/Candidate.js');
const {body, validationResult} = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchAdmin = require("../../middleware/fetchAdmin");

const JWT_SECRET = "AdminAuthentication"

router.post('/createuser',async (req,res)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    var user = await User.findOne({email : req.email});

    if(user){
      return res.status(400).json({error : "A user already exists"})
    }
  
    var salt = await bcrypt.genSalt(10);     // CREATE AND HASH PASSWORD
    var secPass = await bcrypt.hash(req.body.password,salt);
  
  
    user = await User.create({   // CREATE THE NEW USER IN TABLE
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        phoneNo : req.body.phoneNo,
        password : secPass,
        confirmPassword : req.body.confirmPassword
    })
 
  
    const data = {       // CREATE A AUTH TOKEN FOR THE NEW USER
      user : {
        id : user._id
      }
    }
    var authToken = jwt.sign(data,JWT_SECRET);
    res.json({authToken});
})

router.post("/login",async (req,res)=>{
   var result = validationResult(req);
   if(!result.isEmpty()){
    res.status(400).json({error : "Plz enter the correct credentials"});
   }

   try {
    const {aadharNo,voterId,password} = req.body;
    var user = await User.findOne({aadharNo});
    if(!user){
      res.status(400).json({error : "User does not exists"});
    }
 
    var checkPass = await bcrypt.compare(password,user.password);
    if(!checkPass){
      res.status(400).json({error : "User does not exists"});
    }
    
    const data = {
     user : {
       id : user._id
     }
   }
   var authToken = jwt.sign(data,JWT_SECRET);
   res.json({authToken});
   } catch (error) {
      console.log(error.message);
      res.send(500).json("Some Server Error occured");
   }
   

})

router.get('/getUser',fetchAdmin,async (req,res)=>{
  try {
     const userId = req.user.id;
     const user = await User.findById(userId).select("-password");
     res.send(user)
  } catch (error) {
    console.log(error.message);
    res.send(500).json("Some Server Error occured");
  }
})

router.post("/deletevoter",async (req,res)=>{
   const {voterId,aadharNo,password} = req.body;
   let user = await User1.findOne({voterId});
   if(!user){
    res.send(400).json("Plz enter the correct details");
   }
   const result = await User1.deleteOne({voterId : voterId});
   res.send({success : true, user : user});
})

router.post("/deletecandidate",async (req,res)=>{
  const {voterId,aadharNo,password} = req.body;
  let user = await User2.findOne({voterId});
  if(!user){
   res.send(400).json("Plz enter the correct details");
  }
  const result = await User2.deleteOne({voterId : voterId});
  res.send({success : true, user : user});
})

module.exports = router;


