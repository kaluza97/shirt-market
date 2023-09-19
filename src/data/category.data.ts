import { QueryCondition } from '@/redux/slices/Products/Products.types';

type CategoryItem = {
  name: string;
  queryCondition: QueryCondition;
};

export const categoryData: Array<CategoryItem> = [
  {
    name: 'men',
    queryCondition: {
      fieldPath: 'category',
      opStr: '==',
      value: 'men',
    },
  },
  {
    name: 'woman',
    queryCondition: {
      fieldPath: 'category',
      opStr: '==',
      value: 'woman',
    },
  },
  {
    name: 'sale',
    queryCondition: {
      fieldPath: 'specialPrice',
      opStr: '>=',
      value: 1,
    },
  },
];

export const allCategories: QueryCondition = {
  fieldPath: 'category',
  opStr: 'in',
  value: ['men', 'woman', 'sale'],
};
