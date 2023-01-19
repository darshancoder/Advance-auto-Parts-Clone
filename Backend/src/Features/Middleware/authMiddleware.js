const User = require('../User/user.model');
const jwt = require('jsonwebtoken');

 const authMiddleware = async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).send({ message: 'token not found' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).send({ message: 'User not Authenticated' });
        }
        const userId  =  decoded._id;
        const user = await User.findById(decoded);

        if (!user) {
            return res.status(401).send({ message: 'User not Authenticated' });
        }
        req.userId = userId;

        next();
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
};

    module.exports = authMiddleware;