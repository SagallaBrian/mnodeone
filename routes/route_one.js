const express = require('express');
const jsonintro = express.Router();

const usadata = [
    {
        "ajxindex": "40010",
        "ajxuniqid": "83jshfs",
        "ajxtitle": "Inserted Data four",
        "ajxtimestamp": "2020-07-25 05:37:15"
    },
    {
        "ajxindex": "40009",
        "ajxuniqid": "74kdjd",
        "ajxtitle": "Inserted Data Three",
        "ajxtimestamp": "2020-07-25 05:37:15"
    },
    {
        "ajxindex": "40008",
        "ajxuniqid": "48k3k3",
        "ajxtitle": "Inserted Data Two",
        "ajxtimestamp": "2020-07-25 05:37:15"
    }]


jsonintro.get('/', (req, res) => {
    res.send({ "name": "Brian Sagalla" });
});

jsonintro.get('/js', function (req, res) {
    res.json(usadata);
});

module.exports = jsonintro
