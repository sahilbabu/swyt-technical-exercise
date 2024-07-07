import { addCategory, fetchCategories } from '../repositories/categoryRepository';

export const createCategoryService = async (data: { name: string; parentCategoryId?: number }) => {
  return await addCategory(data);
};

export const getCategoriesService = async () => {
  return await fetchCategories();
};
