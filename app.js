var express = require('express');
var mysql = require("mysql")
require('dotenv').config()
const port = process.env.PORT;

var app = express();

const adminRouter = require('./routes/admin.router');
const prestataireRouter = require("./routes/pretataire.router");
const vitrineRouter = require("./routes/vitrine.router");


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

app.all("*", (req, res,next) => {
    throw new AppError(`Requested URL ${req.path} not found !`, 404)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
