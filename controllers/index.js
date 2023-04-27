const router = require('express').Router()
const path = require('path')

const notesRoute = require('./notes/crud')
router.use("/api/notes", notesRoute)


const notesHTML = require('./notes')
router.use('/notes', notesHTML)


router.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router