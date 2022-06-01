const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    findAll: async() => {
        return await prisma.users.findMany();
    },
    findById: async(id) => {
        return await prisma.users.findUnique({where: {id}});
    },
    findByEmail: async(email) => {
        return await prisma.users.findUnique({where: {email}}); 
    },
    create: async(user) => {
        return await prisma.users.create(user);

    },
    edit: async(user) => {
        return await prisma.users.update(user);

    },
    delete: async(id) => {
        return await prisma.users.delete({where: {id}});
    },
}