import { Categories } from '@/components/Products/Products.types';

type CategoryItem = {
  name: Categories;
};

export const categoryData: Array<CategoryItem> = [
  {
    name: 'men',
  },
  {
    name: 'woman',
  },
  {
    name: 'sale',
  },
];
