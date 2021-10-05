const express = require('express');
const router = express.Router();
//route 1: get all the notes

router.get('/fetchallnotes', (req, res) => {
   
    res.json([])
})

module.exports = router