const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

module.exports.hashPassword = async (pass) => {
    const hash = await bcrypt.hash(pass, salt);
    return hash;
};

module.exports.comparePassword = async (bodyPass, dbPass) => {
    return await bcrypt.compare(bodyPass, dbPass);
};
