const router = require('express').Router()
const path = require('path')

const notesRoute = require('./notes/crud')
router.use("/api/notes", notesRoute)


const notesHTML = require('./notes')
router.use('/notes', notesHTML)

// catch all other endpoints and redirect to homepage
router.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router