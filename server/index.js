const express = require("express");
const app = express();
const port = 3001;
var data = require("./data.json");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/books", (req, res) => {
  res.json(data);
});
app.post("/books", (req, res) => {
  console.log("new book successfully added!");
  console.log(req.body);
  //
  // data = { ...data, book: [req.body, ...data.book] };
  // res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
