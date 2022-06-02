module.exports = {
  preloadedUsers: [
    {
      name: "Martin Bertello",
      email: "martinbertello7@gmail.com",
      password: "$2b$10$UQFoYdHJX40J0OQl5SYLxehkrBnncHHTwdoJRQrQ0kjnkk2jSjor6",
      roles: {
        create: [
          {
            role: {
              create: {
                name: "Users manager",
                permissions: {
                  create: [
                    {
                      permission: {
                        create: {
                          name: "createUsers",
                        }
                      }
                    },
                    {
                      permission: {
                        create: {
                          name: "deleteUsers",
                        }
                      }
                    },
                    {
                      permission: {
                        create: {
                          name: "editUsers",
                        }
                      }
                    }
                  ] 
                }
              }
            }
          }
        ]
      },
    },
    {
      name: "Juan Perez",
      email: "juanperez@gmail.com",
      password: "$2b$10$UQFoYdHJX40J0OQl5SYLxehkrBnncHHTwdoJRQrQ0kjnkk2jSjor6",
      roles: {
        create: [
          {
            role: {
              create: {
                name: "Role and permission assigner",
                permissions: {
                  create: [
                    {
                      permission: {
                        create: {
                          name: "addRoles",
                        }
                      }
                    },
                    {
                      permission: {
                        create: {
                          name: "addPermissions",
                        }
                      }
                    },
                  ]
                },
              }
            }
          },
        ]
      },
    },
    {
      name: "Antonela Cipres",
      email: "antonela@gmail.com",
      password: "$2b$10$UQFoYdHJX40J0OQl5SYLxehkrBnncHHTwdoJRQrQ0kjnkk2jSjor6",
      roles: {
        create: [
          {
            role:{
              create: {
                name: "Permission manager",
                permissions: {
                  create: [
                    {
                      permission:{
                        create: {
                          name: "createPermissions",
                        }
                      }
                    },
                    {
                      permission:{
                        create: {
                          name: "deletePermissions",
                        }
                      }
                    },
                    {
                      permission:{
                        create: {
                          name: "editPermissions",
                        }
                      }
                    },
                  ]
                },
              }
            }
          },
        ]
      },
    },
    {
      name: "Brenda Ramirez",
      email: "brendaramirez@gmail.com",
      password: "$2b$10$UQFoYdHJX40J0OQl5SYLxehkrBnncHHTwdoJRQrQ0kjnkk2jSjor6",
      roles: {
        create: [
          {
            role:{
              create: {
                name: "Role manager",
                permissions:{ 
                  create: [
                    {
                      permission:{
                        create: {
                          name: "createRoles",
                        }
                      }
                    },
                    {
                      permission:{
                        create: {
                          name: "deleteRoles",
                        }
                      }
                    },
                    {
                      permission:{
                        create: {
                          name: "editRoles",
                        }
                      }
                    },
                  ]
                },
              }
            }
          },
        ]
      },
    },
  ],
};
