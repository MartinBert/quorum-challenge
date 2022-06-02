const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {hash,formatUserPermissions,formatUserRoles,formatUser} = require("../helpers/userHelpers")

module.exports = {
  findAll: async (query) => {
    const { skip, take, filter } = query;
    if (filter) {
      return await prisma.users.findMany({
        skip: parseInt(skip),
        take: parseInt(take),
        include: { roles: true },
        where: filter,
      });
    }
    return await prisma.users.findMany({
      skip: parseInt(skip),
      take: parseInt(take),
      include: { roles: true },
    });
  },

  findById: async (id) => {
    return await prisma.users.findUnique({ where: { id } });
  },

  findByEmail: async (email) => {
    return await prisma.users.findFirst({ where: { email } });
  },

  create: async (user) => {
    return await prisma.users.create(await formatUser(user));
  },

  edit: async (user) => {
    await prisma.rolesOnUsers.deleteMany({
        where: {
            userId: {
                equals: user.id,
            },
        },
    });

    await prisma.permissionsOnUsers.deleteMany({
        where: {
            userId: {
                equals: user.id,
            },
        },
    });

    const object = {
      where: {
        id: user.id,
      },
      data: {
        name: user.name,
        email: user.email,
        password: await hash(user),
        roles: formatUserRoles(user),
        permissions: formatUserPermissions(user),
      },
    };

    return await prisma.users.update(object);
  },

  delete: async (id) => {
    return await prisma.users.delete({ where: { id } });
  },
};
