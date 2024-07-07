  /* Category Controller
  * ------------------------- */
import { Request, Response } from 'express';
import { createCategoryService, getCategoriesService } from '../services/categoryService';
import { sendCreated, sendBadRequest } from '../../../utils/response';


export const createCategory = async (req: Request, res: Response) => {
  const { name, parentCategoryId } = req.body;

  try {
    const category = await createCategoryService({ name, parentCategoryId });
    sendCreated(res, { data: category, message: 'Category created successfully' });
  } catch (error) {
    console.error('Error creating category:', error);
    sendBadRequest(res, 'Failed to create category');
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getCategoriesService();
    res.status(200).json(categories);
  } catch (error) {
    sendBadRequest(res, 'Failed to fetch categories');
  }
};
