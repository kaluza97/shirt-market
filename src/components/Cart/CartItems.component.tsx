import React, { FC, useEffect, useState } from 'react';
import { Typography, IconButton, Box } from '@mui/material';
import { removeFromCart, addToCart } from '@/redux/slices/Cart/Cart.slice';
import { useDispatch, useSelector } from '@/redux/hooks';
import { Size } from '@/redux/slices/Cart/Cart.types';
import Image from 'next/image';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { fetchProductById } from '@/redux/slices/ProductById/ProductById.thunk';
import { ConfirmModal } from '@/components/ConfirmModal/ConfirmModal.component';

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
            <Typography variant="h6" component="h4">
                Cart Items:
            </Typography>
            {cartItems.map((item) => (
                <Box key={item.id}>
                    {Object.entries(item.quantities).map(([size, quantity]) => (
                        <>
                            {
                                quantity &&
                                <div key={item.name + item.id}>
                                    <p>{item.name}</p>
                                    <Image src={item.img} alt={item.name} width={130} height={160} priority />
                                    <p>
                                        Size: {size}, Quantity: {quantity}, Price: {item.price * quantity} $
                                    </p>
                                    <IconButton
                                        aria-label="add to shopping cart"
                                        onClick={() => handleAddToCart(item.id, size as Size, item.img, item.name, item.price, quantity)}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                    <IconButton
                                        aria-label="remove from shopping cart"
                                        onClick={() => handleRemoveFromCart(item.id, size as Size, quantity)}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <ConfirmModal
                                        open={isConfirmModalOpen}
                                        onClose={handleCloseConfirmModal}
                                        onConfirm={() => handleConfirmModal(item.id, size as Size)}
                                        title="Confirm Removal"
                                        message="Are you sure you want to remove this item from the cart?"
                                    />
                                </div>
                            }
                        </>
                    ))}
                </Box>
            ))}
        </div>
    );
};
