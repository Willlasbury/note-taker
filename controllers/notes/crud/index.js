const router = require('express').Router()
const fs = require('fs')


router.get('/', (req,res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data)=>{
        if (err){
            throw err
        } else {
            let dataArr = JSON.parse(data)
            res.send(dataArr)
        }
    })
})


module.exports = router