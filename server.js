const express = require('express');
const bp = require('body-parser');
const app = express();

app.use(express.static(__dirname + "/public/dist/public"));
app.use(bp.json());

require('./config/routes')(app)

app.listen(8000,
    console.log("Server served on 8000, medium-rare."))