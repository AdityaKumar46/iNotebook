const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')


//route 1: get all the notes

router.get('/fetchallnotes', fetchUser, (req, res) => {
   
    res.json([])
})

module.exports = router