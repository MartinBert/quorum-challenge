const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { formatPermission } = require("../helpers/permissionHelpers");

module.exports = {
  findAll: async (query) => {
    const { skip, take } = query;
    return await prisma.permissions.findMany({
      skip: parseInt(skip),
      take: parseInt(take),
    });
  },
  findById: async (id) => {
    return await prisma.permissions.findUnique({ where: { id } });
  },
  findByEmail: async (email) => {
    return await prisma.permissions.findFirst({ where: { email } });
  },
  create: async (permission) => {
    return await prisma.permissions.create(formatPermission(permission));
  },
  edit: async (permission) => {
    return await prisma.permissions.update({
        where: {
          id: permission.id,
        },
        data: formatPermission(permission).data
      });
  },
  delete: async (id) => {
    return await prisma.permissions.delete({ where: { id } });
  },
};
