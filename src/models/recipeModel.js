const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    name: String,
    date: Date,
    ingredients: Array,
    directions: String
})

module.exports = mongoose.model('Recipe', RecipeSchema);