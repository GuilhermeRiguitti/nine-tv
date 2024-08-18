import { PrismaClient } from '@prisma/client';

// Definição do objeto global com uma propriedade opcional para o PrismaClient
const globalState = global as { prismaClientInstance?: PrismaClient };

// Criação ou reutilização da instância do PrismaClient
export const prismaClient = globalState.prismaClientInstance || new PrismaClient();

// Armazena a instância no objeto global se estiver em ambiente de desenvolvimento
if (process.env.NODE_ENV !== 'production') {
    globalState.prismaClientInstance = prismaClient;
}

export default prismaClient;