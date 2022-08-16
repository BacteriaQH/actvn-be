const dotenv = require('dotenv');
const { comparePassword } = require('../services/hash');
const { findUser } = require('../services/CRUD');
const { generateAccessToken, generateRefreshToken } = require('../services/generate');
dotenv.config();

const LoginController = async (req, res) => {
    const body = req.body;
    const user = await findUser(body);
    if (user) {
        const validPassword = await comparePassword(body.password, user.password);
        if (validPassword) {
            const access_token = generateAccessToken(user);
            const refresh_token = generateRefreshToken(user);
            const { password, ...others } = user;
            res.cookie('refresh_token', refresh_token, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
            });
            res.status(200).send({
                ...others,
                access_token,
                refresh_token,
            });
        } else {
            res.status(404).send({
                code: 404,
                message: 'Invalid password',
            });
        }
    } else {
        return res.status(404).send({ code: 404, message: "User doesn't exist" });
    }
};

module.exports = LoginController;
