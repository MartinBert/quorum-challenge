'use strict'

const checkPermission = (req, res, next) => {
    const requestParam = req.params.id
    const url = (requestParam) ? req.originalUrl.substring(0, req.originalUrl.lastIndexOf('/')) : req.originalUrl
    const method = req.method;
    const requestUser = req.user;

    const userPermissions = []
    requestUser.roles.forEach(({role}) => {
        role.permissions.forEach(({permission}) => {
            permission.routes.forEach(({route}) => {
                userPermissions.push(route);
            })
        })
    })

    requestUser.permissions.forEach(({permission}) => {
        permission.routes.forEach(({route}) => {
            userPermissions.push(route);
        })
    })

    let authorized = false;
    userPermissions.forEach(authorizedRoute => {
        if(authorizedRoute.path === url && authorizedRoute.method === method){
            authorized = true;
        }
    })

    if(authorized) return next();
    
    return res.status(403).send({
        error: 403,
        message: "Unauthorized"
    })
}

module.exports = {
    checkPermission
}