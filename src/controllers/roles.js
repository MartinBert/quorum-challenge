const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { formatRole } = require("../helpers/roleHelpers");

module.exports = {
  findAll: async (query) => {
    const { skip, take } = query;
    return await prisma.roles.findMany({
      skip: parseInt(skip),
      take: parseInt(take),
      include: { permissions: true },
    });
  },
  findById: async (id) => {
    return await prisma.roles.findUnique({ where: { id } });
  },
  create: async (role) => {
    return await prisma.roles.create(formatRole(role));
  },
  edit: async (role) => {
    await prisma.permissionsOnRoles.deleteMany({
      where: {
        roleId: {
          equals: role.id,
        },
      },
    });
    return await prisma.roles.update({
      where: {
        id: role.id,
      },
      data: formatRole(role).data,
    });
  },
  delete: async (id) => {
    return await prisma.roles.delete({ where: { id } });
  },
};
