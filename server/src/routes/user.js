const data = require('../../data.json')
const { Router } = require('express')
const JWT = require("jsonwebtoken");
const { secretKey, tokenExpireIn } = require('../config').config;
function UserController(namespace ='/user') {
    const router = Router();

    router.get(`${namespace}`, function (req, res) {
        res.send(`GET route on things.`);
    });
    router.get(`${namespace}/:id`, function (req, res) {
        res.send(`GET route on things.`);
    });
    router.post(`${namespace}/login`, function (req, res) {
        try {
            const post = req.body;
            const {password,...user} = data.find(v => v.login === post.login && v.password === post.password);
            if (user) {
                res.status(200).send({ ...user, accessToken: JWT.sign(user, secretKey, { expiresIn: tokenExpireIn }) })
            } else {
                res.status(400).send({ message: `User not exists` })
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: error.message })
        }
    });
    router.post(`${namespace}/register`, function (req, res) {
        try {
            const post = req.body;
            if (data.find(v => v.login === post.login)) {
                res.status(400).send({ message: 'User already exists' })
            } else {
                data.push({ ...post, id: data.length + 1 })
                res.status(200).send(post)
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: error.message })
        }
    });
    return router
}

module.exports.UserController = UserController;