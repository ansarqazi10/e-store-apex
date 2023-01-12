require('dotenv').config();
require('./db_connection');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8080;

const adsRouter = require('./routes/ads');
const usersRouter = require('./routes/users');
const likesRouter = require('./routes/likes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', async(req,res) => res.status(200).send('API is working...'));
app.use('/ads', adsRouter);
app.use('/users', usersRouter);
app.use('/likes', likesRouter);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));