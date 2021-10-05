const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const Notes = require('../models/Notes');

//route 1: get all the notes

router.get('/fetchallnotes', fetchUser, (req, res) => {
    
    const notes = await Notes.find({user: req.user.id});
    res.json(notes);
    
})

module.exports = router