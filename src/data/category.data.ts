import {
  Categories,
  CategoryQuery,
} from '@/components/Products/Products.types';

type CategoryItem = {
  name: Categories;
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
      opStr: '!=',
      value: null,
    },
  },
];

export const allCategories: CategoryQuery = {
  fieldPath: 'category',
  opStr: 'in',
  value: ['men', 'woman', 'sale'],
};
