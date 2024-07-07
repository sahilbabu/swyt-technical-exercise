import { Product } from '@prisma/client';
import { addProduct, fetchProducts, countProducts } from '../repositories/productRepository';

export const createProductService = async (data: { name: string; description: string; price: number; image: string; categoryId: number }): Promise<Product> => {
  return await addProduct(data);
};

export const getProductsService = async (sortBy: string, order: string, category: number| undefined, page: number, limit: number) => {
  const totalItems = await countProducts(category);
  console.log("totalItems >>>", totalItems);
  const products = await fetchProducts(sortBy, order, category, page, limit);
  console.log("products >>>", products);
  return { totalItems, products };
};
