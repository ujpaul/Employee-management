const express = require('express');
const router = require('./routes/route');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
module.exports = app;