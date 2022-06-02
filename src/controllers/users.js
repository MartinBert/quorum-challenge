const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    findAll: async(query) => {
        const {skip, take, filter} = query;
        if(filter){
            return await prisma.users.findMany({skip: parseInt(skip),take: parseInt(take),include: {roles: true}, where: filter});
        }
        return await prisma.users.findMany({skip: parseInt(skip),take: parseInt(take),include: {roles: true}});
    },
    findById: async(id) => {
        return await prisma.users.findUnique({where: {id}});
    },
    findByEmail: async(email) => {
        return await prisma.users.findFirst({where: {email}}); 
    },
    create: async(user) => {
        return await prisma.users.create({data: {...user}});
    },
    createMany: async(users) => {
        return await prisma.users.createMany(users);
    },
    edit: async(user) => {
        return await prisma.users.update(user);

    },
    delete: async(id) => {
        return await prisma.users.delete({where: {id}});
    },
}