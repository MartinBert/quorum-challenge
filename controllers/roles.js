const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    findAll: async(query) => {
        const {skip, take} = query;
        return await prisma.roles.findMany({skip: parseInt(skip), take: parseInt(take)});
    },
    findById: async(id) => {
        return await prisma.roles.findUnique({where: {id}});
    },
    findByEmail: async(email) => {
        return await prisma.roles.findFirst({where: {email}}); 
    },
    create: async(role) => {
        return await prisma.roles.create(role);
    },
    createMany: async(roles) => {
        return await prisma.roles.createMany(roles);
    },
    edit: async(role) => {
        return await prisma.roles.update(role);

    },
    delete: async(id) => {
        return await prisma.roles.delete({where: {id}});
    },
}