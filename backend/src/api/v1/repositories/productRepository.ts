  /* Product Repo
  * ------------------------- */
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

export const addProduct = async (data: { name: string; description: string; price: number; image: string; categoryId: number }): Promise<Product> => {
  return await prisma.product.create({
    data
  });
};

export const fetchProducts = async (sortBy: string, order: string, category: number | undefined, page: number, limit: number) => {
  const where = category ? { categoryId: category } : {};
  return await prisma.product.findMany({
    where,
    orderBy: { [sortBy]: order },
    skip: (page - 1) * limit,
    take: limit
  });
};

export const countProducts = async (category: number | undefined) => {
  const where = category ? { categoryId: category } : {};
  return await prisma.product.count({ where });
};
