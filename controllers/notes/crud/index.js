const router = require("express").Router();
const fs = require("fs");

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

router.get("/:title", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        let dataArr = JSON.parse(data);
        res.send(dataArr);
      }
    });
  });

router.post("/", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      let dataArr = JSON.parse(data);
      dataArr.push(req.body);
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
