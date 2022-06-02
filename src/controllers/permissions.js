const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    findAll: async(query) => {
        const {skip, take} = query;
        return await prisma.permissions.findMany({skip: parseInt(skip), take: parseInt(take)});
    },
    findById: async(id) => {
        return await prisma.permissions.findUnique({where: {id}});
    },
    findByEmail: async(email) => {
        return await prisma.permissions.findFirst({where: {email}}); 
    },
    create: async(permission) => {
        return await prisma.permissions.create(permission);
    },
    createMany: async(permissions) => {
        return await prisma.permissions.createMany(permissions);
    },
    edit: async(permission) => {
        return await prisma.permissions.update(permission);

    },
    delete: async(id) => {
        return await prisma.permissions.delete({where: {id}});
    },
}