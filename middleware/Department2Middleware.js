/*

Middleware cho Hệ QLSV

*/

const verifyToken = require('./verifyToken');

const Department2Middleware = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role_symbol === '1' || req.user.role_symbol === '5') {
            next();
        } else {
            res.status(200).json({ code: 403, message: 'You are not allow to access this page' });
        }
    });
};

module.exports = Department2Middleware;
