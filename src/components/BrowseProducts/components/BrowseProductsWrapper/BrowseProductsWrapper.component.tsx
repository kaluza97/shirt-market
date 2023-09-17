// import React, { FC } from 'react';
// import Typography from '@mui/material/Typography';
// import {
//     headerTitle,
// } from '@/components/Products/Products.styles';
// import { Banner } from '@/components/Banner/Banner.component';

// export const BrowseWrapper: FC = () => (
//     <>
//         <Typography component="h3" variant="h4" sx={headerTitle}>
//             Category:
//         </Typography>
//         <Banner />
//     </>
// );

import { firestore } from '@/firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import {
  ProductType,
  productSchema,
} from '@/components/Products/Products.types';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          name: 'next.js',
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ products: ProductType }> = async (
  _context
) => {
  try {
    const dataRef = collection(firestore, 'shirts');
    const queryRef = query(dataRef, where('id', '==', '33'));
    const snapshot = await getDocs(queryRef);

    if (!snapshot.empty) {
      const productData = snapshot.docs[0].data();
      const validatedData = productSchema.safeParse(productData);

      if (validatedData.success) {
        return { props: { products: validatedData.data } };
      }
    }

    throw new Error('Error in data retrieved from Firestore');
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default function BrowseWrapper({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return console.log(products);
}
