const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Notes');

//route 1: get all the notes
router.get('/fetchallnotes', fetchUser, async(req, res) => {
    
    const notes = await Notes.find({user: req.user.id});
    res.json(notes);
})

//route 1: get all the notes
router.post('/addnotes', fetchUser,[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast five characters').isLength({ min: 5 }),
],
 async(req, res) => {

    res.json(notes);
})

module.exports = router