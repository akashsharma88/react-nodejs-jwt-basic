const jwt = require('jsonwebtoken');
const { secretKey } = require('../config').config;

verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token)
        return res.status(403).send({ message: 'Access is forbidden' })
        
    jwt.verify(token.split('Bearer ')[1], secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).send({
                auth: false,
                message: 'Fail to Authentication. Error -> ' + err
            });
        }
        req.user = decoded;
        next();
    });
}

const jwtAuth = {};
jwtAuth.verifyToken = verifyToken;

 
module.exports = jwtAuth;