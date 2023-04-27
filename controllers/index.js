const router = require('express').Router()
const path = require('path')


router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public"))
})


const notesHTML = require('./notes')
router.use("/notes", notesHTML)

const notesRoute = require('./notes/crud')
router.use("/api/notes", notesRoute)

module.exports = router