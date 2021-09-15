const Recipe = require('../models/recipeModel')

exports.getAllRecipes = (res, req) => {
    Recipe
    .find()
    .then(allRecipes => {
        res.status(200).send(allRecipes)
    })
    .catch(error => alert('Cant get all recipes', error))
};

