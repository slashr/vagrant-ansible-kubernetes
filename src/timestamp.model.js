const mongoose = require("mongoose");
const timestampSchema = new mongoose.Schema({
 timestamp: {
 type: String
 }
});
const Time = mongoose.model("Time", timestampSchema);
module.exports = Time;
