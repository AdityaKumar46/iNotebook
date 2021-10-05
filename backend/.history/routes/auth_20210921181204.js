const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


router.post('/', [
    body('username').isEmail(),
    body('password').isLength({ min: 5 }),
], (req, res) => {
   console.log(req.body);
   const user = User(req.body);
   user.save();
   res.send("hello");
})

module.exports = router