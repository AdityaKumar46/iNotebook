const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next)=>{
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"}
        )
    }
    const string = jwt.verify(tokn, "")
    next()
}

module.exports=fetchUser;