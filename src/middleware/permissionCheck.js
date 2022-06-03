const checkPermission = (req, res, next) => {
    const routeGroup = req.originalUrl.substring(1, req.originalUrl.lastIndexOf('/'));
    const routeParamId = req.params.id;
    const method = req.method;
    const permissions = req.permissions;

    if(routeParamId){
        checkPermissionOnDelete(routeGroup)
    }


    next()
}

module.exports = {
    checkPermission
}