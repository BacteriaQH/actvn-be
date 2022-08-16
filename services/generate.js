const { uid } = require('uid');
const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports.generateUID = (length) => {
    return uid(length);
};

module.exports.generateAccessToken = (user) => {
    const access_token = jwt.sign(
        {
            id: user.id,
            role_symbol: user.role_symbol,
        },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: '1h' },
    );
    return access_token;
};

module.exports.generateRefreshToken = (user) => {
    const refresh_token = jwt.sign(
        {
            id: user.id,
            role_symbol: user.role_symbol,
        },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: '365d' },
    );
    return refresh_token;
};
