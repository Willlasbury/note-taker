const router = require("express").Router();
const fs = require("fs");
const  uuid = require('uuid');

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

router.get("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        let dataArr = JSON.parse(data);
        if (dataArr[req.body.id]){
            res.send(dataArr[req.body.id])
        } else{
            alert(`Could not find id ${req.body.id}`)
        }
      }
    });
  });

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
module.exports = router;
