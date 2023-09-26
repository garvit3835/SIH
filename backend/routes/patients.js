const express = require('express');
const { encrypt, checkCreds } = require('../utils/encrypt');
const { assignToken, checkToken } = require('../utils/jwt');
const insert_patient_creds = require('../DB/patients/insert_patient_creds');
const get_patient = require('../DB/patients/get_patient');
const get_patient_creds = require('../DB/patients/get_patient_creds');
const get_family = require('../DB/patients/get_family');
const get_current_appointments = require('../DB/patients/get_current_appointments');
const create_appointment = require('../DB/patients/create_appointment');
const router = express.Router();

router.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const dbpass = await get_patient_creds(username);

    checkCreds(username,password,dbpass).then((verify)=>{
        if(verify){
            assignToken(user,'1h').then((token)=>{
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

    encrypt(password,10).then((pass)=>{
        console.log("Hashed: ",pass);
        insert_patient_creds(email,pass).then((p_id)=>{
            assignToken(p_id,'1h').then((token)=>{
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
    const {name, number, gender, family, address, latitude, longitude} = req.body;
    const p_id = res.locals.authorization;

})

router.get('/details/all',checkToken,(req,res)=>{
    const p_id = res.locals.authorization;
    get_patient(p_id).then((result)=>{
        res.status(200).json({message: 'Details fetched',details:result})
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    });
})

router.get('/details/family',checkToken,(req,res)=>{
    const p_id = res.locals.authorization;
    get_family(p_id).then((result)=>{
        res.status(200).json({message:"Family fetched",family:result});
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })
})

router.get(('/appointments/current',checkToken,(req,res)=>{
    const p_id = res.locals.authorization;
    get_current_appointments(p_id).then((result)=>{
        res.status(200).json({message:"Appointments Fetched",appointments:result});
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })
}))

router.post(('/appointments/create'),checkToken,(req,res)=>{
    const p_id = res.locals.authorization;
    const {d_id, h_id, description, time, is_emergency, status, prescription} = req.body;
    create_appointment(d_id, h_id, description, time, is_emergency, status, prescription).then((result)=>{
        res.status(201).json({message:'Appointment Created',appointments:result});
    }).catch((err)=>{
        res.status(501).json({message:'Error Encountered'})
    })
})

router.post('/check',checkToken,(req,res)=>{
    res.json({message:'OK'});
})

module.exports = router;