const express = require('express');
const { encrypt, checkCreds } = require('../utils/encrypt');
const { checkToken, assignToken } = require('../utils/jwt');
const router = express.Router();

router.post('/login',(req,res)=>{
    const{username,password} = req.body;

    checkCreds(username,password).then((verify)=>{
        if(verify){
            assignToken(user,'24h').then((token)=>{
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

    encrypt(password,20).then((pass)=>{
        console.log("Hashed: ",pass);
    })

    assignToken(user,'24h').then((token)=>{
        res.status(200).send({token:token})
    })
    
})

router.post('/check',checkToken,(req,res)=>{
    res.send({message:'OK'});
})

module.exports = router;
