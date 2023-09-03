import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Typography } from '@mui/material';
import MinusIcon from '@mui/icons-material/Remove';
import { Size } from '@/redux/slices/Cart/Cart.types';
import { removeFromCart, addToCart } from '@/redux/slices/Cart/Cart.slice';
import { useDispatch, useSelector } from '@/redux/hooks';
import { ConfirmModal } from '@/components/ConfirmModal/ConfirmModal.component';
import { Warning } from '@/components/Messages/components/Warning/Warning.component';
import { CartItemProps } from '@/components/Cart/Cart.types';
import {
  ButtonContainer,
  CartItemsContainer,
  DescriptionContainer,
  cartButton,
  descriptionText,
} from '@/components/Cart/Cart.styles';

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const { id, name, img, price, quantities } = item;
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { data } = useSelector((state) => state.productById);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [removedSize, setRemovedSize] = useState<Size | ''>('');
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  const handleRemoveFromCart = (id: number, size: Size, quantity: number) => {
    if (quantity === 1) {
      setRemovedSize(size);
      setIsConfirmModalOpen(true);
    } else {
      dispatch(removeFromCart({ id, size }));
    }
  };

  const handleAddToCart = (
    id: number,
    size: Size,
    img: string,
    name: string,
    price: number,
    quantity: number
  ) => {
    setIsAlertVisible(false);
    if (data && data.totalQuantity[size] > quantity) {
      dispatch(addToCart({ id, size, img, name, price }));
    } else {
      setIsAlertVisible(true);
    }
  };

  const handleConfirmModal = (id: number) => {
    if (removedSize !== '') {
      dispatch(removeFromCart({ id, size: removedSize }));
    }
    setIsConfirmModalOpen(false);
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleRedirectToDetail = (id: number) => {
    push(`/products/${id}`);
  };

  return (
    <Box>
      <Warning
        visibleProp={isAlertVisible}
        alertMessage="There are no more products in this size."
      />
      {Object.entries(quantities).map(([size, quantity], index) => (
        <div key={name + index}>
          {quantity ? (
            <CartItemsContainer>
              <Image
                src={img}
                alt={name}
                width={100}
                height={120}
                priority
                onClick={() => handleRedirectToDetail(id)}
              />
              <DescriptionContainer>
                <Typography component="h3" sx={descriptionText}>
                  Name: {name}
                </Typography>
                <Typography component="h3" sx={descriptionText}>
                  Size: {size}
                </Typography>
                <Typography component="h3" sx={descriptionText}>
                  Quantity: {quantity}
                </Typography>
                <Typography component="h3" sx={descriptionText}>
                  Price: {price * quantity} $
                </Typography>
              </DescriptionContainer>
              <ButtonContainer>
                <Button
                  variant="contained"
                  sx={cartButton}
                  endIcon={<AddIcon />}
                  onClick={() =>
                    handleAddToCart(
                      id,
                      size as Size,
                      img,
                      name,
                      price,
                      quantity
                    )
                  }
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  sx={cartButton}
                  endIcon={<MinusIcon />}
                  onClick={() =>
                    handleRemoveFromCart(id, size as Size, quantity)
                  }
                >
                  Remove
                </Button>
              </ButtonContainer>

              <ConfirmModal
                open={isConfirmModalOpen}
                onClose={handleCloseConfirmModal}
                onConfirm={() => handleConfirmModal(id)}
                title="Confirm Removal"
                message="Are you sure you want to remove this item from the cart?"
              />
            </CartItemsContainer>
          ) : (
            <></>
          )}
        </div>
      ))}
    </Box>
  );
};
