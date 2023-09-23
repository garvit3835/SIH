const express = require('express');
const { encrypt, checkCreds } = require('../utils/encrypt');
const { assignToken, checkToken } = require('../utils/jwt');
const insert_patient_creds = require('../DB/patients/insert_patient_creds');
const router = express.Router();

router.post('/login',async (req,res)=>{

    checkCreds(username,password).then((verify)=>{
        if(verify){
            assignToken(user,'1h').then((token)=>{
                res.status(200).send({message:'Logged in Successfully',token:token})
            })

        }
        else{
            res.sendStatus(401).send({message:'Unauthorized Access'});
        }
    })

})

router.post('/signup/creds',(req,res)=>{
    const {email,password} = req.body;

    encrypt(password,10).then((pass)=>{
        console.log("Hashed: ",pass);
        insert_patient_creds(email,pass).then((p_id)=>{
            assignToken(p_id,'1h').then((token)=>{
                res.status(200).send({message:'New Login Created Successfully',token:token})
            })
        })
        res.status(501).send({message:'Error Encountered'})
    })


})

router.post('/signup/info',checkToken,(req,res)=>{
    const {name,phone,family,policy,address,location,diseases} = req.body;
    console.log(res.locals.authorization);

})

router.post('/check',checkToken,(req,res)=>{
    res.send({message:'OK'});
})

module.exports = router;