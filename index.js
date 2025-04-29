/** Main entry point for server */

'use strict';

require('dotenv').config();

// add in the express dependency for managing server mechanics
const express = require('express');

// initialize instance of express
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('hello world')
});

const start = (port)=>{
    app.listen(port, ()=>{
        console.log(`listening on ${port}`)
    });
};

start(port);
