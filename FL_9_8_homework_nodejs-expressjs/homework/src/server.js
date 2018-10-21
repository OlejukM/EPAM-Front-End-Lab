const express = require('express');
const app = express();
const routs = require('./routes');
const port = 3000;

app.use('/', routs);
app.listen(port, function () {
    console.log("Hello World!");
});