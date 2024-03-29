const express = require('express')

const app = express();

const todoRoute = require('./todos')

let todos = [];

app.use(express.urlencoded({extended:true}))

app.use('/todos',todoRoute);

app.listen(3000, function() {
    console.log("Running on 3000")
})
