const express = require("express");
const app = express();
const port = 3001;
let data = require("./data.json");
const fs = require("fs");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/books", (req, res) => {
  res.json(data.books);
});
app.post("/books", (req, res) => {
  console.log("new book successfully added !");

  // created a new array of book that will contain the new boook added
  // rather than using push we used the spread synthax

  data = { ...data, books: [req.body, ...data.books] };

  /*
  here we modify the json file in the seerver directory so that when the app is
  refreshed the chnages donot vanish
  */
  fs.writeFileSync("data.json", JSON.stringify(data));
  res.json(data.books);
});
app.put("books/:id", (res, req) => {
  console.log("book successfully updated !");
});
app.delete("/books/:title", (res, req) => {
  console.log("book successfully deleted !");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
