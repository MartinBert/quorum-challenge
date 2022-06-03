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
                    permission: {
                      include: {
                        routes: {
                          include: {
                            route: true
                          }
                        }
                      }
                    },
                  },
                },
              },
            },
          },
        },
        permissions: {
          include: {
            permission: {
              include: {
                routes: {
                  include: {
                    route: true
                  }
                }
              }
            },
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
                    permission: {
                      include: {
                        routes: {
                          include: {
                            route: true
                          }
                        }
                      }
                    },
                  },
                },
              },
            },
          },
        },
        permissions: {
          include: {
            permission: {
              include: {
                routes: {
                  include: {
                    route: true
                  }
                }
              }
            },
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
                    permission: {
                      include: {
                        routes: {
                          include: {
                            route: true
                          }
                        }
                      }
                    },
                  },
                },
              },
            },
          },
        },
        permissions: {
          include: {
            permission: {
              include: {
                routes: {
                  include: {
                    route: true
                  }
                }
              }
            },
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

  async addRoles(object){
    const user = await this.findById(parseInt(object.userId));
    const data = {...user};
    const rolesToInsert = data.roles.map(role => role.roleId);
    object.roles.forEach(role => {
      rolesToInsert.push(role);
    })
    data.roles = rolesToInsert;
    data.permissions = (data.permissions.length > 0) ? data.permissions.map(permission => permission.permissionId) : [];
    return await this.edit(data);
  },

  async addPermissions(object){
    const user = await this.findById(parseInt(object.userId));
    const data = {...user};
    const permissionsToInsert = data.permissions.map(permission => permission.permissionId);
    object.permissions.forEach(permission => {
      permissionsToInsert.push(permission);
    })
    data.roles = (data.roles.length > 0) ? data.roles.map(role => role.roleId) : [];
    data.permissions = permissionsToInsert;
    return await this.edit(data);
  },

  delete: async (id) => {
    return await prisma.users.delete({ where: { id } });
  },
};
