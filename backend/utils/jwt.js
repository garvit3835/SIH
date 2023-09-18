const jwt = require('jsonwebtoken');
const privatekey = "SomeRandomAccessKey";

exports.assignToken = async function(data,expires){
    return jwt.sign({
        data: data
      }, privatekey, { expiresIn: expires });
    
}   

exports.checkToken = async function(){
    return jwt.verify(token,privatekey,(err,result)=>{
        if(err){
            return false;
        }
        return true;
    })
    
}
  