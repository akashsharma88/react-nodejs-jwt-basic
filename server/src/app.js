const express = require('express');
const cors = require("cors");
const {UserController} = require('./routes/user');
const {HomeController} = require('./routes/home');
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.get('/', (req, res) => {
    res.send('access denied')
})
app.use('/api', [UserController(),HomeController()])


module.exports.app = app