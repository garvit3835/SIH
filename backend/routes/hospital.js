const express = require('express');
const { encrypt, checkCreds } = require('../utils/encrypt');
const { checkToken, assignToken } = require('../utils/jwt');
const insert_hospital_creds = require('../DB/hospitals/insert_hospital_creds');
const get_hospital_creds = require('../DB/hospitals/get_hospital_creds');
const get_hospital = require('../DB/hospitals/get_hospital');
const get_doctors = require('../DB/hospitals/get_doctors');
const add_doctors = require('../DB/hospitals/add_doctor');
const router = express.Router();

router.post('/login',async(req,res)=>{
    const{username,password} = req.body;
    const dbpass = await get_hospital_creds(username);

    checkCreds(username,password,dbpass).then((verify)=>{
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

router.post('/signup/creds',(req,res)=>{
    const {user,password} = req.body;

    encrypt(password,20).then((pass)=>{
        console.log("Hashed: ",pass);
        insert_hospital_creds(user,pass).then((h_id)=>{
            assignToken(h_id,'24h').then((token)=>{
                res.status(201).json({message:'New Login Created Successfully',token:token})
            })
        }).catch((err)=>{
            res.status(501).json({message:'Error Encountered'})
        })
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })
    
})

router.post('/signup/info',(req,res)=>{
    const {name,phone,address,location} = req.body;
    const h_id = res.locals.authorization;

})

router.get('/details/all',checkToken,(req,res)=>{
    const h_id = res.locals.authorization;

    get_hospital(h_id).then((result)=>{
        res.status(200).json({message:"Hospital details fetched",details:result});
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    });

})

router.get('/details/doctors',checkToken,(req,res)=>{
    const h_id = res.locals.authorization;
    get_doctors(h_id).then((result)=>{
        res.status(200).json({message:"Doctors of hospital fetched",details:result});
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })
})

router.post('/add/doctors',checkToken,(req,res)=>{
    const h_id = res.locals.authorization;
    const {d_id} = req.body;

    add_doctors(h_id,d_id).then((result)=>{
        res.status(201).json({message:'Doctor added successfully',doctor:result})
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })
})

router.post('/check',checkToken,(req,res)=>{
    res.json({message:'OK'});
})

module.exports = router;
