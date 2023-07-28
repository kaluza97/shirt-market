import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { CircularLoading } from '@/components/CircularLoading/CircularLoading.component';
import { Box } from '@mui/material';
import {
  ProductsListContainer,
  headerTitle,
  imgPrice,
  imgTitle,
  productBox,
  productContainer,
} from '@/components/Products/ProductsList.styles';
import { firestore } from '@/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { ProductType, productsListSchema } from './ProductsList.types';

export const ProductsList: FC = () => {
  const [shirtsData, setShirtsData] = useState<ProductType[]>([]);

  const fetchPost = async () => {
    await getDocs(collection(firestore, 'shirts')).then((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      const validatedData = productsListSchema.safeParse(data);
      if (validatedData.success) {
        setShirtsData(validatedData.data);
      } else {
        alert('Error in data retrieved from Firestore');
      }
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const product = shirtsData?.map(({ img, name, price }) => (
    <Box sx={productBox} key={name}>
      <Image src={img} alt={name} width={200} height={250} priority />

      <Typography sx={imgTitle}>{name}</Typography>
      <Typography sx={imgPrice}>{price} $</Typography>
    </Box>
  ));

  return (
    <ProductsListContainer>
      <Typography component="h3" variant="h3" sx={headerTitle}>
        New bestsellers products
      </Typography>
      <Box sx={productContainer}>
        <CircularLoading fetchingData={!!product} />
        {product}
      </Box>
    </ProductsListContainer>
  );
};
