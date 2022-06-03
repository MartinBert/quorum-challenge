const formatRolePermissions = (role) => {
  return {
    create: role.permissions.map((id) => {
      return { permission: { connect: { id } } };
    }),
  };
};

const formatRole = (role) => {
  role.permissions = formatRolePermissions(role);
  return { data: { ...role } };
};

module.exports = {
  formatRole,
};
