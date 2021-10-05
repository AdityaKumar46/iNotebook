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
router.post('/fetchallnotes', fetchUser, async(req, res) => {
    
    const notes = await Notes.find({user: req.user.id});
    res.json(notes);
})

module.exports = router