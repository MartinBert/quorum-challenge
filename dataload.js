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
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/users",
                                    method: "POST",
                                  }
                                }
                              },
                            ]
                          }
                        }
                      }
                    },
                    {
                      permission: {
                        create: {
                          name: "deleteUsers",
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/users",
                                    method: "DELETE",
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    {
                      permission: {
                        create: {
                          name: "editUsers",
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/users",
                                    method: "PUT",
                                  }
                                }
                              },
                            ]
                          }
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
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/users/addRole",
                                    method: "PUT",
                                  }
                                }
                              },
                            ]
                          }
                        }
                      }
                    },
                    {
                      permission: {
                        create: {
                          name: "addPermissions",
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/users/addPermission",
                                    method: "PUT",
                                  }
                                }
                              },
                            ]
                          }
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
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/permissions",
                                    method: "POST",
                                  }
                                }
                              },
                            ]
                          }
                        }
                      }
                    },
                    {
                      permission:{
                        create: {
                          name: "deletePermissions",
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/permissions",
                                    method: "DELETE",
                                  }
                                }
                              },
                            ]
                          }
                        }
                      }
                    },
                    {
                      permission:{
                        create: {
                          name: "editPermissions",
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/permissions",
                                    method: "PUT",
                                  }
                                }
                              },
                            ]
                          }
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
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/roles",
                                    method: "POST",
                                  }
                                }
                              },
                            ]
                          }
                        }
                      }
                    },
                    {
                      permission:{
                        create: {
                          name: "deleteRoles",
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/roles",
                                    method: "DELETE",
                                  }
                                }
                              },
                            ]
                          }
                        }
                      }
                    },
                    {
                      permission:{
                        create: {
                          name: "editRoles",
                          routes: {
                            create: [
                              {
                                route: {
                                  create: {
                                    path: "/roles",
                                    method: "PUT",
                                  }
                                }
                              },
                            ]
                          }
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
