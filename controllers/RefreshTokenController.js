const jwt = require('jsonwebtoken');
require('dotenv').config();
const { generateAccessToken } = require('../services/generate');

const RefreshTokenController = (req, res) => {
    // const cookie = req.headers.cookies;
    // const refresh_token = cookie.split('=')[1];
    const refresh_token = req.cookies.refresh_token;
    if (!refresh_token) {
        // res.headers('Access-Control-Allow-Origin', '*');
        return res.status(200).send({ code: 401, message: 'You are not authenticated' });
    }
    jwt.verify(refresh_token, process.env.JWT_REFRESH_KEY, (err, user) => {
        if (err) console.log(err);
        if (user) {
            newAccessToken = generateAccessToken(user);
            // res.headers('Access-Control-Allow-Origin', '*');

            return res.status(200).send({ code: 200, access_token: newAccessToken });
        }
    });
};

module.exports = RefreshTokenController;
