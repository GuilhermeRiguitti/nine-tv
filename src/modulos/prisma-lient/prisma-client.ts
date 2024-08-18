import { PrismaClient } from "@prisma/client";

// Definição do objeto global com uma propriedade opcional para o PrismaClient
const globalForPrismaService = global as { prismaService?: PrismaClient };

// Criação ou reutilização da instância do PrismaClient
export const prismaClient: PrismaClient =
    globalForPrismaService.prismaService || new PrismaClient();

// Armazena a instância no objeto global se estiver em ambiente de desenvolvimento
if (process.env.NODE_ENV === "development") globalForPrismaService.prismaService = prismaClient;