const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "IAMIRONMAN";

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast five characters').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{

    let user = await User.findOne({email: req.body.email});
    if(user) {
      return res.status(400).json({error: "Sorry a user with this email already exists"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    })

    const data = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);

  res.json(authtoken);
  } catch(error)
  {
    console.error(error.message);
    res.status(500).send("ERROR OCCURED!!!!")
  }
})

//login
router.post('/createuser', [
  body('email', 'Enter a valid email').isEmail()
], async (req, res) => {

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 

});


//route 3: get loggedIn User details 

router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast five characters').isLength({ min: 5 }),
], async (req, res) => {

  try{
    userId = 'todo';
    const user = await User.findById(userId).select("-password")

  }catch(error)
  {
      console.error(error.message);
      res.status(500).send("ERROR OCCURED!!!!")
  }
})

module.exports = router