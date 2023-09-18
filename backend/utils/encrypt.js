const bcrypt = require('bcrypt');
const saltRound = 10;

exports.encrypt = async function (password){

    // bcrypt.genSalt(saltRound,(err,salt)=>{
    //     console.log("Salt: ",salt)
    //     bcrypt.hash(password,salt,(err,hash)=>{
    //         console.log("Hash: ",hash);
    //         return hash;
    //     })
    // })

    let hashed = "";
    await bcrypt.hash(password,saltRound).then((hash)=>{
        console.log("Hash: ",hash);
        hashed = hash;
    })
    return hashed;
}