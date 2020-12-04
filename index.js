require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
let constants = require('./constants')

const app = express()
const port = process.env.PORT || constants.PORT;


app.use(bodyParser.json({ limit: process.env.REQUEST_BODY_SIZE_LIMIT })); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false, limit: process.env.REQUEST_BODY_SIZE_LIMIT }));


let userController = require('./controllers/user');
app.use('/user', userController);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})