import { FC } from 'react';
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
} from '../../Products.styles';
import { ProductDetailFormProps } from '@/components/Products/Products.types';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const ProductDetailForm: FC<ProductDetailFormProps> = ({
  name,
  price,
  totalQuantity,
  selectedSize,
  setSelectedSize,
  handleAddToCart,
  isAlertVisible,
}) => {
  const handleSizeChange = (e: SelectChangeEvent<Size>) => {
    setSelectedSize(e.target.value as Size);
  };

  return (
    <>
      <Typography component="h2" sx={headerText}>
        {name}
      </Typography>
      <Typography component="h2" sx={highlightedText}>
        {price} $
      </Typography>
      <FormContainer>
        <FormControl>
          <RadioGroup
            name="radio-size"
            row
            value={selectedSize}
            onChange={handleSizeChange}
            sx={radioGroup}
          >
            {Object.keys(totalQuantity).map((size) => (
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
