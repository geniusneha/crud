const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    summary: {
        type: String
    }
})

module.exports = mongoose.model("Movie", movieSchema);