const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { formatUser } = require("../helpers/userHelpers");

module.exports = {
  findAll: async (query) => {
    const { skip, take } = query;
    return await prisma.users.findMany({
      skip: parseInt(skip),
      take: parseInt(take),
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  },

  findById: async (id) => {
    return await prisma.users.findUnique({
      where: { id },
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  },

  findByEmail: async (email) => {
    return await prisma.users.findFirst({
      where: { email },
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
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
    const dataToUpdate = await formatUser(user);
    return await prisma.users.update({
      where: {
        id: user.id,
      },
      data: dataToUpdate.data,
    });
  },

  delete: async (id) => {
    return await prisma.users.delete({ where: { id } });
  },
};
