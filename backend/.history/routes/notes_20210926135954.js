const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator');
const Notes = require('../models/Notes');

//route 1: get all the notes
router.get('/fetchallnotes', fetchUser, async (req, res) => {

    try {

        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("ERROR OCCURED!!!!")
    }
})

//route 1: get all the notes
router.post('/addnotes', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast five characters').isLength({ min: 5 }),
],
    async (req, res) => {

        try {

            const { title, description, tag } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const note = new Notes({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("ERROR OCCURED!!!!")
        }
    })

//Route 3: update existing note

router.put('/updatenote/:id', fetchUser,
    async (req, res) => {
        const { title, description, tag } = req.body;
        //create a newNote object

        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if (!note) {
            res.status(404).send("Not Found")
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });

    })

    //Route 4: delete Note

    router.delete('/deletenote/:id', fetchUser,
    async (req, res) => {
        const { title, description, tag } = req.body;


        //Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if (!note) {
            res.status(404).send("Not Found")
        }
        //allow user only when the user owns it
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });

    })

module.exports = router