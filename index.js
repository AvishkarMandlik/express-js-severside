var express = require('express');
var app = express();
const port = 5000


app.listen(port,() => {
    console.log(`App listening on ${port}`);
});