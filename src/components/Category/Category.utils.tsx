import { categoryData } from '@/data/category.data';

export const matchingCategory = (category?: string | Array<string>) =>
  categoryData.find((item) => item.name === category);
