import { categoryData } from '@/data/category.data';

export const findCategoryByName = (category?: string | Array<string>) =>
  categoryData.find((item) => item.name === category);
