const express = require("express");
const cors = require("cors");
const app = express();
const port = 8081;

const corsOpition = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

app.use(cors(corsOpition));

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/user", (req, res) => {
  res.send({
    id: 1,
    firstName: "minsoo",
    lastName: "Kim"
  });
});

app.listen(port, () => {
  console.log(`Exporess app is listening at https://localhost:${port}`);
});
