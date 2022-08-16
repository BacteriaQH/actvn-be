const verifyToken = require('./verifyToken');

const TeacherMiddleware = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role_symbol === '1' || req.user.id === req.params.id) {
            next();
        } else {
            res.status(200).json({ code: 403, message: 'You are not allow to access this page' });
        }
    });
};

module.exports = TeacherMiddleware;
