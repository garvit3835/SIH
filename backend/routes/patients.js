const express = require('express');
const { encrypt } = require('../utils/encrypt');
const router = express.Router();

router.post('/login',async (req,res)=>{

    const {password} = req.body;

    encrypt(password).then((pass)=>{
        console.log("Hashed: ",pass);
    })

})

router.post('/signup',(req,res)=>{

})

module.exports = router;