const users = require('../db/users.json');

module.exports = {
    getAllUsers: (req, res) => {
        res.status(200).send(users)
    }
}