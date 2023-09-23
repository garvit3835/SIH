const express = require('express');
const { encrypt, checkCreds } = require('../utils/encrypt');
const { checkToken, assignToken } = require('../utils/jwt');
const insert_hospital_creds = require('../DB/hospitals/insert_hospital_creds');
const get_hospital_creds = require('../DB/hospitals/get_hospital_creds');
const router = express.Router();

router.post('/login',async(req,res)=>{
    const{username,password} = req.body;
    const dbpass = await get_hospital_creds(username);

    checkCreds(username,password).then((verify)=>{
        if(verify){
            assignToken(user,'24h').then((token)=>{
                res.status(200).json({message:'Logged in Successfully',token:token})
            })
        }
        else{
            res.status(401).json({message:'Unauthorized Access'});
        }
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })

    

})

router.post('/signup',(req,res)=>{
    const {user,password} = req.body;

    encrypt(password,20).then((pass)=>{
        console.log("Hashed: ",pass);
        insert_hospital_creds(user,pass).then((p_id)=>{
            assignToken(p_id,'24h').then((token)=>{
                res.status(201).json({message:'New Login Created Successfully',token:token})
            })
        }).catch((err)=>{
            res.status(501).json({message:'Error Encountered'})
        })
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })
    
})

router.post('/check',checkToken,(req,res)=>{
    res.json({message:'OK'});
})

module.exports = router;
