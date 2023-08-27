import React, { FC, useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { removeFromCart, addToCart } from '@/redux/slices/Cart/Cart.slice';
import { useDispatch, useSelector } from '@/redux/hooks';
import { Size } from '@/redux/slices/Cart/Cart.types';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import MinusIcon from '@mui/icons-material/Remove';
import { fetchProductById } from '@/redux/slices/ProductById/ProductById.thunk';
import { ConfirmModal } from '@/components/ConfirmModal/ConfirmModal.component';
import { ButtonContainer, CartItemsContainer, DescriptionContainer, cartButton, descriptionText } from '@/components/Cart/Cart.styles';

export const CartItems: FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart);
    const { data } = useSelector((state) => state.productById);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null)
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

    const handleRemoveFromCart = (id: number, size: Size, quantity: number) => {
        if (quantity === 1) {
            setIsConfirmModalOpen(true)
        }
        else {
            dispatch(removeFromCart({ id, size }));
        }
    };

    useEffect(() => {
        selectedProductId && dispatch(fetchProductById(selectedProductId));
    }, [dispatch, selectedProductId]);


    const handleAddToCart = (id: number, size: Size, img: string, name: string, price: number, quantity: number) => {
        setSelectedProductId(id)
        if (data && data.totalQuantity[size] >= quantity) {
            dispatch(addToCart({ id, size, img, name, price }));
        }
    };

    const handleConfirmModal = (id: number, size: Size) => {
        dispatch(removeFromCart({ id, size }));
        setIsConfirmModalOpen(false)
    }

    const handleCloseConfirmModal = () => {
        setIsConfirmModalOpen(false)
    }

    return (
        <div>
            {cartItems.map((item) => (
                <Box key={item.id}>
                    {Object.entries(item.quantities).map(([size, quantity]) => (
                        <>
                            {
                                quantity ?
                                    <CartItemsContainer key={item.name + item.id}>
                                        <Image src={item.img} alt={item.name} width={100} height={110} priority />
                                        <DescriptionContainer>
                                            <Typography component="h3" sx={descriptionText}>
                                                Name: {item.name}
                                            </Typography>
                                            <Typography component="h3" sx={descriptionText}>
                                                Size: {size}
                                            </Typography>
                                            <Typography component="h3" sx={descriptionText}>
                                                Quantity: {quantity}
                                            </Typography>
                                            <Typography component="h3" sx={descriptionText}>
                                                Price: {item.price * quantity} $
                                            </Typography>
                                        </DescriptionContainer>
                                        <ButtonContainer>

                                            <Button variant="contained" sx={cartButton} endIcon={<AddIcon />} onClick={() => handleAddToCart(item.id, size as Size, item.img, item.name, item.price, quantity)}
                                            >
                                                Add Item
                                            </Button>
                                            <Button variant="contained" sx={cartButton} endIcon={<MinusIcon />} onClick={() => handleRemoveFromCart(item.id, size as Size, quantity)}
                                            >
                                                Remove Item
                                            </Button>
                                        </ButtonContainer>

                                        <ConfirmModal
                                            open={isConfirmModalOpen}
                                            onClose={handleCloseConfirmModal}
                                            onConfirm={() => handleConfirmModal(item.id, size as Size)}
                                            title="Confirm Removal"
                                            message="Are you sure you want to remove this item from the cart?"
                                        />
                                    </CartItemsContainer> : <></>
                            }
                        </>
                    ))}
                </Box>
            ))}
        </div>
    );
};
