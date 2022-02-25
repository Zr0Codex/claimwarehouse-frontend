const express = require("express");
const app = express();
const port = 8085;

const bodyParser = require("body-parser");

const MockData = require("../src/util/MockData");

const Resgistration = require("../src/util/calendar.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const { v1: uuidv1, v4: uuidv4 } = require("uuid");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  var user_name = req.body.username;
  var password = req.body.password;
  console.log("User name = " + user_name + ", password is " + password);
  if (user_name === "tontrakan" && password === "xcalculusx") {
    res.write(
      JSON.stringify({
        username: user_name,
        firstName: "Tontrakan",
        lastName: "Noyme",
        role: "สินไหมทดแทน",
        userId: "2901272",
        token: uuidv4(),
        user_role: "admin",
      })
    );
  } else {
    res.write(
      JSON.stringify({
        username: user_name,
        firstName: "user",
        lastName: "role",
        role: "เบิกเอกสาร",
        userId: "2901275",
        token: uuidv4(),
        user_role: "user",
      })
    );
  }
  res.end();
});

app.post("/find/document", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log("query", req.body);
  if (req.body.findKey === "9064J00004") {
    res.write(JSON.stringify(MockData));
  }
  res.end();
});

app.get("/registration/data", (req, res) => {
  res.write(JSON.stringify(Resgistration));
  res.end();
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
