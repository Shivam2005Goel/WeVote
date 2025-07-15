const express = require('express');
const router = express.Router();
const User = require('../../models/Candidate.js');
const {body, validationResult} = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchCandidate = require("../../middleware/fetchCandidate");

const JWT_SECRET = "CandidateAuthentication"


router.post('/createuser',async (req,res)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    var user = await User.findOne({
        $or: [
            { email: req.body.email },
            { voterId: req.body.voterId },
            { aadharNo: req.body.aadharNo }
          ]
    });

    if(user){
      return res.status(400).json({error : "A user already exists"})
    }
  
    var salt = await bcrypt.genSalt(10);     // CREATE AND HASH PASSWORD
    var secPass = await bcrypt.hash(req.body.password,salt);
  
  
    user = await User.create({   // CREATE THE NEW USER IN TABLE
        fname : req.body.fname,
        lname : req.body.lname,
        dob : req.body.dob,
        gender : req.body.gender,
        city : req.body.city,
        state : req.body.state,
        aadharNo : req.body.aadharNo,
        voterId : req.body.voterId,
        email : req.body.email,
        phoneNo : req.body.phoneNo,
        password : secPass,
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


router.get('/getUser',fetchCandidate,async (req,res)=>{
  try {
     const userId = req.user.id;
     const user = await User.findById(userId).select("-password");
     res.send(user)
  } catch (error) {
    console.log(error.message);
    res.send(500).json("Some Server Error occured");
  }
})

module.exports = router;


