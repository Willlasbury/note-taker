const router = require('express').Router()
const path = require('path')


router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public"))
})

const notesRoute = require('./notes')
router.use("/notes", notesRoute)

module.exports = router