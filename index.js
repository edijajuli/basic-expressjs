const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const db = require("./connection")
const response = require("./response")

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const sql = "SELECT * FROM karyawan"
  db.query(sql, (error, result) => {
    //hasil data dari mysql
    // console.log(result)
    // res.send(result);
    response(200, result, "get all datas from karyawan", res)
  })
});

app.get("/find", (req, res) => {
  const sql = `SELECT nama FROM karyawan WHERE id_karyawan = ${req.query.id_karyawan}`
  db.query(sql, (error, result) => {
    response(200, result, "Find karyawan name: ", res)
  })

});

app.post("/login", (req, res) => {
  console.log({ requestdariluar: req.body });
  //   const username = res.body.username;
  //   if (username === usernameFromDbExist) {
  //     res.status(400).send("username tidak dapat digunakan");
  //   }
  res.send("ini menu login");
});

app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("update berhasil");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
