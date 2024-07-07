import { Request, Response } from 'express';
import { addProduct, fetchProducts } from '../repositories/productRepository';

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, image, categoryId } = req.body;
  try {
    const product = await addProduct({ name, description, price, image, categoryId });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await fetchProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};