const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    findAll: async(query) => {
        const {skip, take} = query;
        return await prisma.users.findMany({skip: parseInt(skip), take: parseInt(take), include: {
            roles: true,
        }});
    },
    findById: async(id) => {
        return await prisma.users.findUnique({where: {id}});
    },
    findByEmail: async(email) => {
        return await prisma.users.findFirst({where: {email}}); 
    },
    create: async(user) => {
        const result = await prisma.users.create(user);
        console.log(result);
        return result;

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