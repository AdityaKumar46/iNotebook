const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next)=>{
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    
    next()
}

module.exports=fetchUser;