var express = require('express');
var mysql = require("mysql")
require('dotenv').config()
const port = process.env.PORT;

var app = express();

var adminRouter = require('./routes/admin.router');
var indexRouter = require('./routes/index.router');


mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    dataBase : process.env.DATABASE
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
