// connection.js
const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/mongo-test";
const dbConnection = () => {
 return mongoose.connect(dbUrl, {useNewUrlParser:true});
};
module.exports = dbConnection;
