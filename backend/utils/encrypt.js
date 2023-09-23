const bcrypt = require('bcrypt');
const get_patient_creds = require('../DB/patients/get_patient_creds');

exports.encrypt = async function (password,salt){

    return await bcrypt.hash(password,salt).then((hash)=>{
        return hash;
    })

}

exports.checkCreds = async function(user,password,dbpass){
    return await bcrypt.compare(password, dbpass);
}

