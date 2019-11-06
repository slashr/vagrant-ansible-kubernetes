const express = require('express');
const app = express();
const dbConnection = require("./src/connection");

//Port config
//const PORT = 8080;
const PORT = process.env.PORT;

//Timestamp
app.get('/', (req, res) => {
  res.send(`${Date.now()}`);
});

//Connect to DB
app.listen(PORT, function() {
 console.log(`Listening on ${PORT}`);
dbConnection().then(() => {
 console.log("Connected to Database");
 });
});
