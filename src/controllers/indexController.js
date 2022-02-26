
const api = require('../services/api');

const { data } = api;

exports.index = (req, res) => {
    res.send(data)
    return;
}