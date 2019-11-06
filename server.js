const express = require('express');
const app = express();
const dbConnection = require("./src/connection");
const Time = require("./src/timestamp.model");

//Port config
//const PORT = 8080;
const PORT = process.env.PORT;

//Timestamp
app.get('/', (req, res) => {
  res.send(`${Date.now()}`);
});

app.get("/timestamp", async (req, res) => {
 const timestamps = await Time.find();
 res.send(timestamps);
});
app.get("/timestamp-create", async (req, res) => {
 const timestamp = new Time({ timestamp: `${Date.now()}`});

 await timestamp.save().then(() => console.log("Timestamp created"));

 res.send("Timestamp created \n");
});

//Connect to DB
app.listen(PORT, function() {
 console.log(`Listening on ${PORT}`);
dbConnection().then(() => {
 console.log("Connected to Database");
 });
});
