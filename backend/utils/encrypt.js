const bcrypt = require('bcrypt');

exports.encrypt = async function (password,salt){

    return await bcrypt.hash(password,salt).then((hash)=>{
        return hash;
    })

}

exports.checkCreds = async function(user,password){
    return await bcrypt.compare(password, dbpass);
}

