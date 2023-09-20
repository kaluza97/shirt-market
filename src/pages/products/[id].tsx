import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { productBox } from '@/components/Products/Products.styles';
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.component';
import { Layout } from '@/components/Layout/Layout.component';
import { ProductDetail } from '@/components/Products/components/ProductDetail/ProductDetail.component';
import { Footer } from '@/components/Footer/Footer.component';
import { headerTextBlack } from '@/styles/global.styles';

const ProductDetailPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout
      header={<NavigationMenu />}
      content={
        <Box sx={productBox}>
          {id ? (
            <ProductDetail id={Number(id)} />
          ) : (
            <Typography sx={headerTextBlack}>Product not found.</Typography>
          )}
        </Box>
      }
      footer={<Footer />}
    />
  );
};

export default ProductDetailPage;
