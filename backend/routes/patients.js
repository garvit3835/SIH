const express = require('express');
const { encrypt } = require('../utils/encrypt');
const { assignToken } = require('../utils/jwt');
const router = express.Router();

router.post('/login',async (req,res)=>{

    assignToken(user,'1h').then((token)=>{
        console.log("token",token);
    })

})

router.post('/signup',(req,res)=>{
    const {user,password} = req.body;

    encrypt(password,10).then((pass)=>{
        console.log("Hashed: ",pass);
    })

    assignToken(user,'1h').then((token)=>{
        console.log("token",token);
    })

})

module.exports = router;