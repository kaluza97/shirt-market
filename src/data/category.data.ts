import {
  Categories,
  CategoryQuery,
} from '@/components/Products/Products.types';

type CategoryItem = {
  name: Categories;
  categoryQuery: CategoryQuery;
};

export const saleCategory: CategoryQuery = {
  fieldPath: 'specialPrice',
  opStr: '!=',
  value: null,
};

const menCategory: CategoryQuery = {
  fieldPath: 'category',
  opStr: '==',
  value: 'men',
};

const womanCategory: CategoryQuery = {
  fieldPath: 'category',
  opStr: '==',
  value: 'woman',
};

export const categoryData: Array<CategoryItem> = [
  {
    name: 'men',
    categoryQuery: menCategory,
  },
  {
    name: 'woman',
    categoryQuery: womanCategory,
  },
  {
    name: 'sale',
    categoryQuery: saleCategory,
  },
];

export const menAndWomanCategories: Array<CategoryQuery> = [
  menCategory,
  womanCategory,
];
export const allCategories: Array<CategoryQuery> = [
  menCategory,
  womanCategory,
  saleCategory,
];
