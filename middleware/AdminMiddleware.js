const verifyToken = require('./verifyToken');

const AdminMiddleware = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role_symbol === '1') {
            next();
        } else {
            res.status(403).json('You are not allowed to access this');
        }
    });
};

module.exports = AdminMiddleware;
