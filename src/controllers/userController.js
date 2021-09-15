const User = require('../models/userModel')

exports.getAllUsers = (res, req) => {
    User
    .find()
    .then(allUsers => {
        res.status(200).send(allUsers)
    })
    .catch(error => alert('Cant get all users', error))
};

exports.signupGet = (req, res) => {
    res.render('signup')
}

exports.loginGet = (req, res) => {
    res.render('login')
}

exports.signupPost = (req, res) => {
    res.send('New user signup')
}

exports.loginPost = (req, res) => {
    res.send('user logged in')
}