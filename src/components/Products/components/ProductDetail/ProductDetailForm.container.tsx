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
  headerText,
  highlightedText,
  FormContainer,
  radioGroup,
  radio,
  confirmButton,
  TextBox,
  crossedOutText,
  redText,
} from '@/components/Products/Products.styles';
import { ProductDetailFormProps } from '@/components/Products/Products.types';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from '@/redux/hooks';
import { addToCart } from '@/redux/slices/Cart/Cart.slice';

export const ProductDetailForm: FC<ProductDetailFormProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productById);
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
          price: data.specialPrice ? data.specialPrice : data.price,
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

  if (!data) {
    return null;
  }

  return (
    <>
      <Typography component="h2" sx={headerText}>
        {data.name}
      </Typography>
      {data.specialPrice ? (
        <TextBox>
          <Typography sx={crossedOutText}>{data.price} $</Typography>
          <Typography sx={redText}>{data.specialPrice} $</Typography>
        </TextBox>
      ) : (
        <Typography sx={highlightedText}>{data.price} $</Typography>
      )}
      <FormContainer>
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
            isVisible={isAlertVisible}
            alertMessage="There are no more products in this size."
          />
        </FormControl>
      </FormContainer>
    </>
  );
};
