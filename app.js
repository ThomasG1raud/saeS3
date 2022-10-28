var express = require('express');
var mysql = require("mysql2")
require('dotenv').config()
const port = process.env.PORT;
var app = express();

const adminRouter = require('./routes/admin.router');
const prestataireRouter = require("./routes/pretataire.router");
const vitrineRouter = require("./routes/vitrine.router");

app.use("/admin", adminRouter);
app.use("/prestataire", prestataireRouter);
app.use("/", vitrineRouter);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/admin', adminRouter);

app.all("*", (req, res,next) => {
    throw new AppError(`Requested URL ${req.path} not found !`, 404)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
