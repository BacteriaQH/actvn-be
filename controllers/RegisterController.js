const { generateUID } = require('../services/generate');
const { hashPassword } = require('../services/hash');
const { createUser } = require('../services/CRUD');
const RegisterController = async (req, res) => {
    try {
        const body = req.body;
        body.id = generateUID(20);
        body.password = await hashPassword(body.password);
        const result = await createUser(body);
        result
            ? res.status(200).json({ code: 200, message: 'Register success' })
            : res.status(404).json({ code: 404, message: 'Error' });
    } catch (err) {
        console.log(err);
    }
};

module.exports = RegisterController;
