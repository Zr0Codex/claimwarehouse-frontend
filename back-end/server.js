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

const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "xcalculusx",
  port: 5432,
});

client.connect();

app.get("/create_table", function (req, res) {
  const query = `
    CREATE TABLE calendar_batch (
        id serial PRIMARY KEY,
        date varchar (50) NOT NULL,
        data json
    );
  `;

  try {
    const res = client.query(query);
    console.log("Table is successfully created", res);
  } catch (err) {
    console.log(err.stack);
  } finally {
    // client.close();
  }
});

app.post("/remove_calendar", function (req, response) {
  var id = req.body.id;
  var data = req.body.data;
  var con = JSON.stringify(data);
  console.log("data backend", id);
  const query_for_remove_rows = `
    SELECT "data", ARRAY_LENGTH("data",1) FROM "calendar_batch" WHERE "id"= '${id}';
  `;
  const query = `
    UPDATE calendar_batch i
    SET    data = i2.data
    FROM  (
      SELECT id, array_to_json(array_agg(elem)) AS data
      FROM   calendar_batch i2
          , json_array_elements(i2.data) elem
      WHERE  elem->>'id' <> '${data["id"]}'
      GROUP  BY 1
      ) i2
    WHERE i2.id = i.id
    AND   json_array_length(i2.data) < json_array_length(i.data)
    RETURNING *;
  `;

  // if()

  client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    response.send(res);
    console.log("res", res);
    console.log("Data REMOVE successful");
    // client.end();
  });
  // response.end();
});

app.post("/insert", function (req, res) {
  var id = req.body.id;
  var date = req.body.date;
  var data = req.body.data;
  var con = JSON.stringify(data);
  const query = `
    INSERT INTO calendar_batch (date, data)
    SELECT '${date}', '${con}' 
    WHERE NOT EXISTS (
      SELECT date FROM calendar_batch
      WHERE date = '${date}' 
    )  
  `;

  client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data insert successful", res.rows);
    // client.end();
  });
  res.end();
});

app.get("/calendar_data/all", function (req, response) {
  const query = `
    SELECT * FROM calendar_batch
  `;
  client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    // var data = JSON.stringify(res.rows);
    response.send(res.rows);
    console.log("call data successful");
    // client.end();
    // response.end();
  });
  //response.end();
});

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
