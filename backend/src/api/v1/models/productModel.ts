import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProduct = async (data: { name: string; description: string; price: number; image: string; categoryId: number }) => {
  return await prisma.product.create({ data });
};

export const getProducts = async (sortBy: string, order: string, category: number, page: number, limit: number) => {
  return await prisma.product.findMany();
};
