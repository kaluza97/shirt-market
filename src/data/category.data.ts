import {
  Categories,
  QueryCondition,
} from '@/components/Products/Products.types';
import { FieldPath, WhereFilterOp } from 'firebase/firestore';

type CategoryItem = {
  name: Categories;
  queryCondition: {
    fieldPath: string | FieldPath;
    opStr: WhereFilterOp;
    value: Categories | null;
  };
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
      opStr: '!=',
      value: null,
    },
  },
];

export const allCategories: QueryCondition = {
  fieldPath: 'category',
  opStr: 'in',
  value: ['men', 'woman', 'sale'],
};
