import { CategoryQuery } from '@/redux/slices/Products/Products.types';

type CategoryItem = {
  name: string;
  categoryQuery: CategoryQuery;
};

export const categoryData: Array<CategoryItem> = [
  {
    name: 'men',
    categoryQuery: {
      fieldPath: 'category',
      opStr: '==',
      value: 'men',
    },
  },
  {
    name: 'woman',
    categoryQuery: {
      fieldPath: 'category',
      opStr: '==',
      value: 'woman',
    },
  },
  {
    name: 'sale',
    categoryQuery: {
      fieldPath: 'specialPrice',
      opStr: '>=',
      value: 1,
    },
  },
];

export const allCategories: CategoryQuery = {
  fieldPath: 'category',
  opStr: 'in',
  value: ['men', 'woman', 'sale'],
};
