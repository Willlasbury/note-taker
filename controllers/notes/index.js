const router = require('express').Router()
const fs = require('fs')
const path = require("path")

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"))
})
// router.get('/', (req,res) => {
//     fs.readFile('./db/db.json', 'utf-8', (err, data)=>{
//         if (err){
//             throw err
//         } else {
//             let dataArr = data.split('')
//             console.log("dataArr:", dataArr)
//         }
//     })
// })

module.exports = router