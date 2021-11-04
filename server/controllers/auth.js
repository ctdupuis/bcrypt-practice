const bcrypt = require('bcryptjs');
let users = [];

module.exports = {
    getAllUsers: (req, res) => {
        res.status(200).send(users);
    },
    createUser: (req, res) => {
        const newUser = {...req.body};
        users.push(newUser);
        res.status(200).send(newUser);
    },
    loginUser: (req, res) => {
        let target = users.find(user => user.username === req.body.username);
        res.status(200).send(target);
    },
    clear: (req, res) => {
        users = [];
        res.status(200).send("DB Succesfully cleared");
    }
}