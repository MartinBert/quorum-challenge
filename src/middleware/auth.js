const userController = require('../controllers/users');
const roleController = require('../controllers/roles');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const roles = require('../controllers/roles');
const public_key = fs.readFileSync(path.dirname(__dirname) + '/middleware/jwtRS256.key.pub');
const private_key = fs.readFileSync(path.dirname(__dirname) + '/middleware/jwtRS256.key');

const unauthorizedResponse = {
    error: 403,
    message: 'unauthorized'
}

const resolveToken = async(user, password) => {
    const processCredentials = new Promise((resolve) => {
        bcrypt.compare(password, user.password, (err) => {
            if(err) resolve(unauthorizedResponse);
            resolve({token: jwt.sign({"email": user.email }, private_key, { algorithm: 'RS256' })});
        });
    });
    return await processCredentials;  
}

module.exports = {
    login: async(credentials) => {
        const { email, password } = credentials;
        const user = await userController.findByEmail(email);
        if(!user) return unauthorizedResponse;
        const token = await resolveToken(user, password)
        return token;
    },
    checkIfUserIsAuthorized: async(req, res, next) => {
        const token = req.headers.authorization;
        try {
            if(!token) return res.status(403).send(unauthorizedResponse);
            const veryfyToken = new Promise((resolve) => {
                jwt.verify(token, public_key, {algorithms: ['RS256']}, (err, loggedUser) => {
                    if(err) return res.status(403).send(unauthorizedResponse);
                    userController.findByEmail(loggedUser.email)
                    .then(user => {
                        if(user) {
                            let permissions = [];
                            user.roles.forEach(({role}) => {
                                role.permissions.forEach(({permissionId}) => {
                                    permissions.push(permissionId);
                                })
                            })
                            user.permissions.forEach(({permissionId}) => {
                                permissions.push(permissionId);
                            })
                            req.permissions = permissions;
                            return resolve(true)
                        };
                        return res.status(403).send(unauthorizedResponse);
                    })
                })
            })
            const result = await veryfyToken;
            if(result) next();
        } catch (error) {
            console.error(error);
        }
    }
}