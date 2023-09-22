import React, { FC, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from '@/redux/hooks';
import {
  DetailContainer,
  DetailImageContainer,
  PanelContainer,
  ProductDetailContainer,
} from '@/components/Products/Products.styles';
import { CustomAlert } from '@/components/Message/components/CustomAlert/CustomAlert.component';
import { ProductDetailProps } from '@/components/Products/Products.types';
import { ProductDetailAccordion } from '@/components/Products/components/ProductDetail/ProductDetailAccordion.component';
import { ProductDetailForm } from '@/components/Products/components/ProductDetail/ProductDetailForm.container';
import { fetchProductById } from '@/redux/slices/Product/Product.thunk';
import Image from 'next/image';
import { Breakpoints } from '@/styles/variables';

export const ProductDetail: FC<ProductDetailProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.productById);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <CustomAlert
        alertType="error"
        alertMessage="The operation has failed. Please contact technical support."
      />
    );
  }

  if (!data) {
    return null;
  }

  return (
    <ProductDetailContainer>
      <PanelContainer>
        <DetailImageContainer>
          <Image
            src={data.img}
            alt={data.name}
            fill
            sizes={`(min-width: ${Breakpoints.desktop}) 42rem`}
            priority
          />
        </DetailImageContainer>
        <ProductDetailForm id={id} />
      </PanelContainer>
      <DetailContainer>
        <ProductDetailAccordion />
      </DetailContainer>
    </ProductDetailContainer>
  );
};
