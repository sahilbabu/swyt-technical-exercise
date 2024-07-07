import { Product } from '@prisma/client';
import { addProduct, fetchProducts } from '../repositories/productRepository';

export const createProductService = async (data: { name: string; description: string; price: number; image: string; categoryId: number }): Promise<Product> => {
  return await addProduct(data);
};

export const getProductsService = async (sortBy: string, order: string, category: number| undefined, page: number, limit: number) => {
  return await fetchProducts(sortBy, order, category, page, limit);
};
