const express = require('express');
const { encrypt, checkCreds } = require('../utils/encrypt');
const { assignToken, checkToken } = require('../utils/jwt');
const insert_doctor_creds = require('../DB/doctors/insert_doctor_creds');
const get_doctor_creds = require('../DB/doctors/get_doctor_creds');
const get_doctor = require('../DB/doctors/get_doctor');
const get_appointments = require('../DB/doctors/get_appointments');
const router = express.Router();

router.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const dbpass = await get_doctor_creds(username);

    checkCreds(username,password,dbpass).then((verify)=>{
        if(verify){
            assignToken(user,'4h').then((token)=>{
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
    const {email,password} = req.body;

    encrypt(password,15).then((pass)=>{
        console.log("Hashed: ",pass);
        insert_patient_creds(email,pass).then((d_id)=>{
            assignToken(d_id,'4h').then((token)=>{
                res.status(201).json({message:'New Login Created Successfully',token:token})
            })
        }).catch((err)=>{
            res.status(501).json({message:'Error Encountered'})
        })
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })
})

router.post('/signup/info',checkToken,(req,res)=>{
    const {name, number, latitude, longitude, specialization, rating, is_checkedin} = req.body;
    const d_id = res.locals.authorization;

})

router.get('/details/all',checkToken,(req,res)=>{
    const d_id = res.locals.authorization;
    get_doctor(d_id).then((result)=>{
        res.status(200).json({message:"Doctor details fetched",details:result});
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })
})

router.get('/details/appointments',checkToken,(req,res)=>{
    const d_id = res.locals.authorization;
    get_appointments(d_id).then((result)=>{
        res.status(200).json({message:"Appointments fetched",details:result});
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })
})

router.post('/check',checkToken,(req,res)=>{
    res.json({message:'OK'});
})

module.exports = router;