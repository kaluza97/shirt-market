import React, { FC, Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import {
    imgPrice,
    imgTitle,
    productBox,
} from '@/components/Products/ProductsList.styles';
import { firestore } from '@/firebase/firebaseConfig';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { ProductType, productsListSchema } from './ProductsList.types';
import { CircularLoading } from '../CircularLoading/CircularLoading.component';

export const FetchProducts: FC = () => {
    const [shirtsData, setShirtsData] = useState<ProductType[]>([]);

    const fetchShirtsData = async () => {
        const limitDataRef = query(collection(firestore, 'shirts'), limit(5));
        await getDocs(limitDataRef).then((snapshot) => {
            const data = snapshot.docs.map((doc) => doc.data());
            const validatedData = productsListSchema.safeParse(data);
            if (validatedData.success) {
                setShirtsData(validatedData.data);
            } else {
                throw new Error('Error in data retrieved from Firestore');
            }
        });
    };

    useEffect(() => {
        fetchShirtsData();
    }, []);


    return (
        <Suspense fallback={<CircularLoading />}>
            {shirtsData?.map(({ img, name, price }) => (
                <Box sx={productBox} key={name}>
                    <Image src={img} alt={name} width={200} height={250} priority />
                    <Typography sx={imgTitle}>{name}</Typography>
                    <Typography sx={imgPrice}>{price} $</Typography>
                </Box>
            ))}
        </Suspense>
    );
};
