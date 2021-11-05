const User = require('../../models/user.js')

module.exports = {
    getAllUsers: (req, res) => {
        res.status(200).send(User.all);
    },
    createUser: (req, res) => {
        let { username, password } = req.body;

        const newUser = new User(username, password);

        let safeUser = {...newUser};
        delete safeUser.password;

        res.status(200).send(safeUser);
    },
    loginUser: (req, res) => {
        let { username, password } = req.body;

        let targetUser = User.all.find(user => user.username === username);

        if (targetUser && targetUser.authenticate(password)) {
            let safeUser = {...targetUser}
            delete safeUser.password
            res.status(200).send(safeUser);
        } else {
            res.status(404).send("User not found.")
        }
    },
    clear: (req, res) => {
        User.clearAll();
        res.status(200).send("DB Succesfully cleared");
    }
}