const bcrypt = require("bcrypt");

const hash = async (user) => {
  const hash = new Promise((resolve) => {
    bcrypt.hash(user.password, 10, (err, resultHash) => {
      if (!err) resolve(resultHash);
    });
  });
  return await hash;
};

const formatUserPermissions = (user) => {
  return {
    create: user.permissions.map((id) => {
      return { permission: { connect: { id } } };
    }),
  };
};

const formatUserRoles = (user) => {
  return {
    create: user.roles.map((id) => {
      return { role: { connect: { id } } };
    }),
  };
};

const formatUser = async (user) => {
  user.roles = formatUserRoles(user);
  user.permissions = formatUserPermissions(user);
  user.password = await hash(user);
  return { data: { ...user } };
};

module.exports = {
  formatUser
};
