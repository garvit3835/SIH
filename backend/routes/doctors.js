const express = require('express');
const { encrypt } = require('../utils/encrypt');
const { assignToken } = require('../utils/jwt');
const router = express.Router();

router.post('/login',(req,res)=>{
    assignToken(user,'2h').then((token)=>{
        console.log("token",token);
    })
})

router.post('/signup',(req,res)=>{
    const {user,password} = req.body;

    encrypt(password,15).then((pass)=>{
        console.log("Hashed: ",pass);
    })

    assignToken(user,'2h').then((token)=>{
        console.log("token",token);
    })

})

module.exports = router;