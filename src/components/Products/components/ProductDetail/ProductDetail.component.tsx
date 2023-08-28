import React, { FC, useEffect, useState } from 'react';
import {
    Box,
    CircularProgress,
    Typography,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import Image from 'next/image';
import { addToCart, removeFromCart } from '@/redux/slices/Cart/Cart.slice';
import { Size } from '@/redux/slices/Cart/Cart.types';
import { SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from '@/redux/hooks';
import { fetchProductById } from '@/redux/slices/Product/Product.thunk';

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
        <Box>
            <Image
                src={data.img}
                alt={data.name}
                width={200}
                height={250}
                priority
            />
            <Typography>{data.name}</Typography>
            <Typography>{data.price} $</Typography>
            {Object.keys(data.totalQuantity).map((size) => (
                <Typography key={size}>
                    {size}: {data.totalQuantity[size as Size]}
                </Typography>
            ))}
            {error && <Typography>{error}</Typography>}
            <FormControl variant="standard">
                <InputLabel id="size-label">Size</InputLabel>
                <Select
                    labelId="size-label"
                    id="size-select"
                    value={selectedSize}
                    onChange={handleSizeChange}
                    label="Size"
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
            </FormControl>
            <div>
                <Typography>
                    {selectedSize}: {selectedSizeQuantity}
                </Typography>
                <Button onClick={handleAddToCart}>Add to cart</Button>
                <Button onClick={handleRemoveFromCart}>Remove from cart</Button>
            </div>
        </Box>
    );
};
