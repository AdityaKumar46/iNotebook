const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('username', 'Enter a valid email'),
    body('password', 'Password must be atleast five characters').isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(user => res.json(user));

})

module.exports = router