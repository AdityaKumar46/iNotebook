const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next)=>{
    //Get the user from the jwt token and add id to req object
    next()
}

module.exports=fetchUser;