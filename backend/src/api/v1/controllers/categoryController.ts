import { Request, Response } from 'express';
import { createCategoryService, getCategoriesService } from '../services/categoryService';

export const createCategory = async (req: Request, res: Response) => {
  const { name, parentCategoryId } = req.body;
  console.log(req.body);
  try {
    const category = await createCategoryService({ name, parentCategoryId });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getCategoriesService();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};
