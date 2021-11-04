const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getAllUsers
} = require('./controllers/auth');

app.get('/', getAllUsers);


const PORT = process.env.port || 4000;


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));