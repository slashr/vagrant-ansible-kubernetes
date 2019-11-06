// connection.js
const mongoose = require("mongoose");
const dbUrl = "mongodb://mongo:27017/mongo-test";
const dbConnection = () => {
 return mongoose.connect(dbUrl, {useNewUrlParser:true});
};
module.exports = dbConnection;
