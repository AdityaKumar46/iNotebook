const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Notes');

//route 1: get all the notes
router.get('/fetchallnotes', fetchUser, async (req, res) => {

    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
})

//route 1: get all the notes
router.post('/addnotes', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast five characters').isLength({ min: 5 }),
],
    async (req, res) => {

        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()

        res.json(savedNote);
    })

module.exports = router