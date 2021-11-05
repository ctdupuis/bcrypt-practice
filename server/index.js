const express = require('express');
const cors = require('cors');
const db = require('../db/queries')

const app = express();

app.use(express.json());
app.use(cors());

const {
    getAllUsers,
    createUser,
    loginUser,
    clear
} = require('./controllers/auth');

// BEFORE PG DATABASE
app.get('/', getAllUsers);
app.post('/', createUser);
app.post('/login', loginUser);
app.get('/clear', clear);

// USING PG DATABASE
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)



const PORT = process.env.port || 4000;


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));