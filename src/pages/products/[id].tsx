import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { imgTitle, productBox } from '@/components/Products/Products.styles';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Layout } from '@/components/Layout/Layout.component';
import { ProductItemDetail } from '@/components/Products/ProductItemDetail.component';

const ProductDetailPage: FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout
            header={<NavigationMenu />}
            content={
                <Box sx={productBox}>
                    {id ? (
                        <ProductItemDetail id={Number(id)} />
                    ) : (
                        <Typography sx={imgTitle}>Product not found.</Typography>
                    )}
                </Box>
            }
        />
    );
};

export default ProductDetailPage;
