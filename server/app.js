const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router.js');
const handlerError = require('./handlerError/handler');

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);
app.use(handlerError);

module.exports = app;
