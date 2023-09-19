const express = require('express');
const { encrypt } = require('../utils/encrypt');
const router = express.Router();

router.post('/login',(req,res)=>{

    assignToken(user,'24h').then((token)=>{
        console.log("token",token);
    })

})

router.post('/signup',(req,res)=>{
    const {password} = req.body;
    encrypt(password,20).then((pass)=>{
        console.log("Hashed: ",pass);
    })

    assignToken(user,'24h').then((token)=>{
        console.log("token",token);
    })
    
})

module.exports = router;
