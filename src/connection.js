// connection.js
const mongoose = require("mongoose");
const DB_PORT = process.env.DB_PORT
const dbUrl = `mongodb://mongo:${DB_PORT}/mongo-test`;
const dbConnection = () => {
 return mongoose.connect(dbUrl, {useNewUrlParser:true});
};
module.exports = dbConnection;
