const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
    id: String,
    name: String,
    state: String
});

const City = mongoose.model("City", CitySchema);

module.exports = City;