import { FC, useState } from 'react';
import { CustomAlert } from '@/components/Message/components/CustomAlert/CustomAlert.component';
import { Size } from '@/redux/slices/Cart/Cart.types';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import {
  FormContainer,
  radioGroup,
  radio,
} from '@/components/Products/Products.styles';
import {
  ProductDetailFormProps,
  ProductType,
} from '@/components/Products/Products.types';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from '@/redux/hooks';
import { addToCart } from '@/redux/slices/Cart/Cart.slice';
import {
  displayPriceOrSpecialPrice,
  findCartItemById,
} from '@/components/Products/Products.utils';
import { button, headerText } from '@/styles/global.styles';

export const ProductDetailForm: FC<ProductDetailFormProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productById);
  const { specialPrice, price, img, name, totalQuantity } = data as ProductType;
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const itemById = findCartItemById(cartItems, id);
  const selectedSizeQuantity =
    (selectedSize && itemById?.quantities[selectedSize]) || 0;

  const handleAddToCart = () => {
    setIsAlertVisible(false);
    if (
      totalQuantity &&
      selectedSize &&
      selectedSizeQuantity < totalQuantity[selectedSize]
    ) {
      dispatch(
        addToCart({
          id,
          img: img,
          name: name,
          price: specialPrice ? specialPrice : price,
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

  return (
    <>
      <Typography component="h2" sx={headerText}>
        {name}
      </Typography>
      {displayPriceOrSpecialPrice({ price, specialPrice })}
      <FormContainer>
        <FormControl>
          <RadioGroup
            name="radio-size"
            row
            value={selectedSize}
            onChange={handleSizeChange}
            sx={radioGroup}
          >
            {totalQuantity &&
              Object.keys(totalQuantity).map((size) => (
                <FormControlLabel
                  key={size}
                  value={size}
                  label={size}
                  disabled={totalQuantity[size as Size] === 0}
                  control={<Radio sx={radio} />}
                />
              ))}
          </RadioGroup>
          <Button
            variant="contained"
            onClick={handleAddToCart}
            sx={button}
            disabled={!selectedSize}
            endIcon={<ShoppingCartOutlinedIcon />}
          >
            Add to cart
          </Button>
          <CustomAlert
            alertType="warning"
            isVisible={isAlertVisible}
            alertMessage="There are no more products in this size."
          />
        </FormControl>
      </FormContainer>
    </>
  );
};
