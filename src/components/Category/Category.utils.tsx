import { categoryData } from '@/data/category.data';

export const matchingCategory = (category: string | string[] | undefined) =>
  categoryData.find((item) => item.name === category);
