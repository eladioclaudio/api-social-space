require('dotenv').config();
const axios = require('axios');
const api = process.env.GITHUB_API;

let apiResult = [];

axios(api)
    .then(res => {
        apiResult.push(...res.data)
    })
    .catch(e => console.log(e))


exports.data = apiResult;