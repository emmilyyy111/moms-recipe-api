const User = require('../models/userModel')

exports.getAllUsers = (res, req) => {
    User
    .find()
    .then(allUsers => {
        res.status(200).send(allUsers)
    })
    .catch(error => alert('Cant get all users', error))
};

exports.createUser = (req, res) => {
    new User (req.body)
    .save()
    .then(() => res.status(200).send('New user'))
    .catch(err => console.log(err))
}


exports.login = (req, res) => {
    res.send('login')
}

exports.signupPost = (req, res) => {
    res.send('New user signup')
}

exports.loginPost = (req, res) => {
    console.log(req.body)
    res.send('user logged in')
}