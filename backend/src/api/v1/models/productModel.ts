import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProduct = async (data: { name: string; description: string; price: number; image: string; categoryId: number }) => {
  console.log("data >>>", data);
  return await prisma.product.create({ data });
};

export const getProducts = async (sortBy: string, order: string, category: number, page: number, limit: number) => {
  console.log("category >>>", category);
  console.log("order >>>", order);
  console.log("limit >>>", limit);
  console.log("page >>>", page);
  return await prisma.product.findMany({
    where: category ? { categoryId: category } : undefined,
    orderBy: sortBy ? { [sortBy]: order } : undefined,
    skip: (page - 1) * limit,
    take: limit
  });
};
