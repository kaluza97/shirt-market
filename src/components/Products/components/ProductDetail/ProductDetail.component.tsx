import React, { FC, useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { addToCart } from '@/redux/slices/Cart/Cart.slice';
import { Size } from '@/redux/slices/Cart/Cart.types';
import { useDispatch, useSelector } from '@/redux/hooks';
import { fetchProductById } from '@/redux/slices/Product/Product.thunk';
import {
  DetailContainer,
  DetailImageContainer,
  ProductDetailContainer,
} from '@/components/Products/Products.styles';
import { CustomAlert } from '@/components/Message/components/CustomAlert/CustomAlert.component';
import { ProductDetailProps } from '@/components/Products/Products.types';
import Image from 'next/image';
import { ProductDetailAccordion } from './ProductDetailAccordion.component';
import { ProductDetailForm } from '@/components/Products/components/ProductDetail/ProductDetailForm.container';

export const ProductDetail: FC<ProductDetailProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.productById);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const selectedSizeQuantity = useSelector((state) => {
    const item = state.cart.cart.find((item) => item.id === id);
    if (selectedSize !== null) {
      return item?.quantities[selectedSize] || 0;
    }
  });
  const productIsTruthy =
    data && selectedSize !== null && selectedSizeQuantity !== undefined;

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    setIsAlertVisible(false);
    if (
      productIsTruthy &&
      selectedSizeQuantity < data.totalQuantity[selectedSize]
    ) {
      dispatch(
        addToCart({
          id,
          img: data.img,
          name: data.name,
          price: data.price,
          size: selectedSize,
        })
      );
    } else {
      setIsAlertVisible(true);
    }
  };

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
      <DetailImageContainer>
        <Image src={data.img} alt={data.name} fill priority />
      </DetailImageContainer>
      <ProductDetailForm
        name={data.name}
        price={data.price}
        totalQuantity={data.totalQuantity}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        handleAddToCart={handleAddToCart}
        isAlertVisible={isAlertVisible}
      />
      <DetailContainer>
        <ProductDetailAccordion />
      </DetailContainer>
    </ProductDetailContainer>
  );
};
