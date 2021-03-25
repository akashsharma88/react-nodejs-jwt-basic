const data = require('../../data.json')
const jwtAuth = require('./verifyToken');
const {Router} = require('express');
function HomeController(namespace='/home') {
    const router = Router();
    router.get(`${namespace}/profile`, jwtAuth.verifyToken, function (req, res) {
        try {
            return res.status(200).send(req.user)
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: 'An error occured, Error: ' + error.message })
        }
    });
return router
}
module.exports.HomeController = HomeController