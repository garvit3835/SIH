const express = require('express');
const { encrypt, checkCreds } = require('../utils/encrypt');
const { assignToken, checkToken } = require('../utils/jwt');
const router = express.Router();

router.post('/login',(req,res)=>{
    checkCreds(username,password).then((verify)=>{
        if(verify){
            assignToken(user,'4h').then((token)=>{
                res.status(200).send({token:token})
            })
        }
        else{
            res.sendStatus(401);
        }
    })
})

router.post('/signup',(req,res)=>{
    const {user,password} = req.body;

    encrypt(password,15).then((pass)=>{
        console.log("Hashed: ",pass);
    })

    assignToken(user,'4h').then((token)=>{
        res.status(200).send({token:token})
    })

})

router.post('/check',checkToken,(req,res)=>{
    res.send({message:'OK'});
})

module.exports = router;