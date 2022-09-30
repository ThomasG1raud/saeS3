var express = require('express');
var mysql = require("mysql")
require('dotenv').config()
const port = process.env.PORT;

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    dataBase : process.env.DATABASE
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
