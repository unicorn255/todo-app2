import express from 'express';

const express = require('express')
const mongoose = require ('mongoose')
const app = express();
app.use(express.json());

const AuthRoute = require('./routes/auth')

mongoose.connect('mongodb://localhost:3000)
app.listen(port, (req) => {
    req.
    console.log('Server is running http://localhost:'+port);
});