import { categoryData } from '@/data/category.data';

export const matchingCategory = (
  category: string | Array<string> | undefined
) => categoryData.find((item) => item.name === category);
