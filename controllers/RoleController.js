const { listRoles } = require('../services/CRUD');

const ListRoles = async (req, res) => {
    const roles = await listRoles();
    res.status(200).send(roles);
};

module.exports = {
    ListRoles,
};
