const userController = require('../controllers/users');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const public_key = fs.readFileSync(path.dirname(__dirname) + '/middleware/public.pem')
const private_key = fs.readFileSync(path.dirname(__dirname) + '/middleware/private.pem')

const unauthorizedResponse = {
    error: 403,
    message: 'unauthorized'
}

const resolveToken = async(user, password) => {
    bcrypt.compare(password, user.password, (err) => {
        if(err){ 
            console.log(err) 
            return res.status(403).send(unauthorizedResponse)
        }
        return jwt.sign({
            "email": user.email
        }, private_key, { algorithm: 'RS256' })
    });
}

module.exports = {
    login: async(credentials) => {
        const { email, password } = credentials;
        userController.findByEmail(email)
        .then(user => {
            resolveToken(user, password);
        })
    },
    checkIfUserIsAuthorized: (req, res) => {
        const token = req.headers.authorization;
        try {
            if(!token) return res.status(403).send(unauthorizedResponse);
            jwt.verify(token, public_key, { algorithms: ['RS256'] }, (err, loggedUser) => {
                if(err) return res.status(403).send(unauthorizedResponse);
                userController.findByEmail(loggedUser.email)
                .then(user => {
                    if(user) return true;
                    return false;
                })
            })
        } catch (error) {
            console.error(error);
        }
    }
}