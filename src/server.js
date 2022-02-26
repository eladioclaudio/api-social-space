require('dotenv').config();

const express = require('express');
const path = require('path');
const routes = require('./routes/router');

const PORT = process.env.PORT;




const server = express();


server
    .use(routes)
    .listen(PORT, console.log(`Server is running... at http://localhost:${PORT}`))