const formatPermissionRoutes = (permission) => {
  return {
    create: permission.routes.map((id) => {
      return { route: { connect: { id } } };
    }),
  };
};

const formatPermission = (permission) => {
  permission.routes = formatPermissionRoutes(permission);
  return { data: { ...permission } };
};

module.exports = {
  formatPermission,
};
