const express = require('express');
const { encrypt, checkCreds } = require('../utils/encrypt');
const { assignToken, checkToken } = require('../utils/jwt');
const router = express.Router();

router.post('/login',async (req,res)=>{

    checkCreds(username,password).then((verify)=>{
        if(verify){
            assignToken(user,'1h').then((token)=>{
                res.status(200).send({token:token})
            })
        }
        else{
            res.sendStatus(401);
        }
    })

})

router.post('/signup',(req,res)=>{
    const {username,password,name,phone,family,policy,address,location,diseases} = req.body;

    encrypt(password,10).then((pass)=>{
        console.log("Hashed: ",pass);
    })

    assignToken(username,'1h').then((token)=>{
        res.status(200).send({token:token})
    })

})

router.post('/check',checkToken,(req,res)=>{
    res.send({message:'OK'});
})

module.exports = router;