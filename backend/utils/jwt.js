const jwt = require('jsonwebtoken');
const privatekey = "SomeRandomAccessKey";

exports.assignToken = async function(data,expires){
    return jwt.sign({
        data: data
      }, privatekey, { expiresIn: expires });
    
}   

exports.checkToken = async function(req,res,next){
    console.log(req.headers);
    const authHeader = req.headers.authorization;
    if(header){
        const token = authHeader.split(' ')[1];
        jwt.verify(token,privatekey,(err,result)=>{
            if(err){
                res.status(401).send({success:false,message:"Not Authenticated"});
            }
            else{
                next();
            }
        })
    }
    else{
        res.status(403).send({success:false,message:"Token not sent"})
    }   
}

