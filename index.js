const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());
app.use("/", router);



mongoose
.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen('5000', () => {
        console.log('Listening on port 5000...')
    })
    })

.catch(err => console.log(err))

const recipeRoutes = require('./src/routes/recipeRoutes')
app.use(recipeRoutes)

const userRoutes = require('./src/routes/userRoutes')
app.use(userRoutes)