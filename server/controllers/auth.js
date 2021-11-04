const users = require('../db/users.json');

module.exports = {
    getAllUsers: (req, res) => {
        res.status(200).send(users)
    },
    createUser: (req, res) => {
        const newUser = {...req.body};
        users.push(newUser);
        res.status(200).send(newUser);
    }
}