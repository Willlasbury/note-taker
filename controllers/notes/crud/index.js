const router = require("express").Router();
const fs = require("fs");
const  uuid = require('uuid');

// get all data in db.json
router.get("/", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            throw err;
        } else {
            let dataArr = JSON.parse(data);
            res.send(dataArr);
        }
    });
});


// get data by id in db.json
router.get("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        let dataArr = JSON.parse(data);
        if (dataArr[req.body.id]){
            res.send(dataArr[req.body.id])
        } else{
            res.send(`Could not find id ${req.body.id}`)
        }
      }
    });
  });

  // add note to db.json
router.post("/", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
        let newNote = {
            "id": uuid.v4(),
            "title":req.body.title,
            "text":req.body.text,
        }
      let dataArr = JSON.parse(data);
      dataArr.push(newNote);
      fs.writeFile("./db/db.json", JSON.stringify(dataArr,null,4), null, (err) => {
        if (err) {
          throw err;
        } else {
            console.log("test")
        }
      });
    }
  });
});


router.delete("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        let dataArr = JSON.parse(data);
        if (dataArr[req.body.id]){
            res.send({"message": "note deleted successfully"})
        } 
      }
    });
  });

module.exports = router;
