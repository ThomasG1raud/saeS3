//const db = require('./model');
var express = require('express');
require('dotenv').config()
var app = express();
//const {Sequelize} = require('sequelize');

const AppError = require("./utils/appError");
const adminRouter = require('./routes/admin.router');
const prestataireRouter = require("./routes/prestataire.router");
const vitrineRouter = require("./routes/vitrine.router");

app.use("/admin", adminRouter);
app.use("/prestataire", prestataireRouter);
app.use("/", vitrineRouter);

/*db.sequelize.sync()
    .then(() => {
        (console.log("bdd OK"));
        (console.log("http://localhost:3000/admin/"));
    })
    .catch((error) => {
        console.log(error);
    });
*/


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/admin', adminRouter);

app.all("*", (req, res,next) => {
    throw new AppError(`Requested URL ${req.path} not found !`, 404)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})
