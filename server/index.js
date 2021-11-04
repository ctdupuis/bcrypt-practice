const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getAllUsers,
    createUser,
    loginUser,
    clear
} = require('./controllers/auth');

app.get('/', getAllUsers);
app.post('/', createUser);
app.post('/login', loginUser);
app.get('/clear', clear);

const PORT = process.env.port || 4000;


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));