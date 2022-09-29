var express = require('express');
const port = process.env.PORT;
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

console.log(port)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
