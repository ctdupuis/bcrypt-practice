const bcrypt = require('bcryptjs');
let users = [];

module.exports = {
    getAllUsers: (req, res) => {
        res.status(200).send(users);
    },
    createUser: (req, res) => {
        let { username, password } = req.body;
        const salt = bcrypt.genSaltSync(6);
        const passHash = bcrypt.hashSync(password, salt);
        const newUser = {
            username: username,
            password: passHash
        }
        users.push(newUser);
        let safeUser = {...newUser};
        delete safeUser.password;
        res.status(200).send(safeUser);
    },
    loginUser: (req, res) => {
        let { username, password } = req.body;
        let targetUser = users.find(user => user.username === username);
        const authenticated = bcrypt.compareSync(password, targetUser.password);
        let safeUser = {...targetUser}
        if (authenticated) {
            delete safeUser.password
        }
        res.status(200).send(safeUser);
    },
    clear: (req, res) => {
        users = [];
        res.status(200).send("DB Succesfully cleared");
    }
}