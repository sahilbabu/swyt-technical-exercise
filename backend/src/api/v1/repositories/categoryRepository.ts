import { createCategory, getCategories } from '../models/categoryModel';

export const addCategory = async (data: { name: string; parentCategoryId?: number }) => {
  return await createCategory(data);
};

export const fetchCategories = async () => {
  return await getCategories();
};
