import React, { FC, useEffect, useState } from 'react';
import {
  CircularProgress,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { addToCart } from '@/redux/slices/Cart/Cart.slice';
import { Size } from '@/redux/slices/Cart/Cart.types';
import { SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from '@/redux/hooks';
import { fetchProductById } from '@/redux/slices/Product/Product.thunk';
import {
  ProductDetailContainer,
  confirmButton,
  descriptionText,
  headerText,
  radio,
  radioGroup,
} from '@/components/Products/Products.styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CustomAlert } from '@/components/Message/components/CustomAlert/CustomAlert.component';
import { ProductDetailProps } from '@/components/Products/Products.types';

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

  const handleSizeChange = (e: SelectChangeEvent<Size>) => {
    setSelectedSize(e.target.value as Size);
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
      <Typography component="h2" sx={headerText}>
        {data.name}
      </Typography>
      <Typography component="h2" sx={headerText}>
        {data.price} $
      </Typography>
      <Image src={data.img} alt={data.name} width={350} height={500} priority />
      <FormControl>
        <RadioGroup
          name="radio-size"
          row
          value={selectedSize}
          onChange={handleSizeChange}
          sx={radioGroup}
        >
          {Object.keys(data.totalQuantity).map((size) => (
            <FormControlLabel
              key={size}
              value={size}
              label={size}
              disabled={data.totalQuantity[size as Size] < 0}
              control={<Radio sx={radio} />}
            />
          ))}
        </RadioGroup>
        <Button
          variant="contained"
          onClick={handleAddToCart}
          sx={confirmButton}
          disabled={!selectedSize}
          endIcon={<ShoppingCartOutlinedIcon />}
        >
          Add to cart
        </Button>
        <CustomAlert
          alertType="warning"
          visibleProp={isAlertVisible}
          alertMessage="There are no more products in this size."
        />
      </FormControl>
      <Typography component="h3" sx={descriptionText}>
        Stay stylish and comfortable all day with this high-quality shirt. Its
        modern design and various sizes make it a versatile choice for any
        occasion.
      </Typography>
    </ProductDetailContainer>
  );
};
