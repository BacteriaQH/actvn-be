const LogoutController = async (req, res) => {
    res.clearCookie('refresh_token');
    res.status(200).send({ code: 200, message: 'success' });
};

module.exports = LogoutController;
