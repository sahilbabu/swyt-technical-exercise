import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

export const addProduct = async (data: { name: string; description: string; price: number; image: string; categoryId: number }): Promise<Product> => {
  return await prisma.product.create({data});
};

export const fetchProducts = async (sortBy: string, order: string, category: number | undefined, page: number, limit: number) => {
  return await prisma.product.findMany({});
};

