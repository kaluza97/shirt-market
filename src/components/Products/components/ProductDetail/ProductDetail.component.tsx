import React, { FC, useEffect, useState } from 'react';
import {
  CircularProgress,
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { addToCart, removeFromCart } from '@/redux/slices/Cart/Cart.slice';
import { Size } from '@/redux/slices/Cart/Cart.types';
import { SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from '@/redux/hooks';
import { fetchProductById } from '@/redux/slices/ProductById/ProductById.thunk';
import {
  ProductDetailContainer,
  confirmButton,
  descriptionText,
  headerText,
  radio,
  radioGroup,
} from '@/components/Products/Products.styles';

interface Props {
  id: number;
}

export const ProductDetail: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.productById);
  const [selectedSize, setSelectedSize] = useState<Size>('S');
  const selectedSizeQuantity = useSelector((state) => {
    const item = state.cart.cart.find((item) => item.id === id);
    return item?.quantities[selectedSize] || 0;
  });

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch]);

  const handleAddToCart = () => {
    if (data && selectedSizeQuantity < data.totalQuantity[selectedSize]) {
      dispatch(addToCart({ id, size: selectedSize }));
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id, size: selectedSize }));
  };

  const handleSizeChange = (e: SelectChangeEvent<Size>) => {
    setSelectedSize(e.target.value as Size);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
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

      {/* {Object.keys(data.totalQuantity).map((size) => (
                <Typography key={size}>
                    {size}: {data.totalQuantity[size as Size]}
                </Typography>
            ))} */}
      {/* <FormControl variant="standard">
                <Select
                    labelId="size-label"
                    id="size-select"
                    value={selectedSize}
                    onChange={handleSizeChange}
                    label="Size"
                    sx={select}
                >
                    {Object.keys(data.totalQuantity).map((size) => (
                        <MenuItem
                            key={size}
                            value={size}
                            disabled={data.totalQuantity[size as Size] === 0}
                        >
                            {size}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl> */}
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
              disabled={data.totalQuantity[size as Size] === 0}
              control={<Radio sx={radio} />}
            />
          ))}
        </RadioGroup>
        <Button onClick={handleAddToCart} sx={confirmButton}>
          Add to cart
        </Button>
      </FormControl>
      <Typography component="h3" sx={descriptionText}>
        Stay stylish and comfortable all day with this high-quality shirt. Its
        modern design and various sizes make it a versatile choice for any
        occasion.
      </Typography>

      <Typography>
        {selectedSize}: {selectedSizeQuantity}
      </Typography>
      <Button onClick={handleRemoveFromCart}>Remove from cart</Button>
    </ProductDetailContainer>
  );
};
