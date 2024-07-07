import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createCategory = async (data: { name: string; parentCategoryId?: number }) => {
  return await prisma.category.create({ data });
};

export const getCategories = async () => {
  return await prisma.category.findMany();
};
