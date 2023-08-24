import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { addToCart, removeFromCart } from '@/redux/slices/Cart/CartSlice';
import { ProductType } from '@/components/Products/ProductsList.types';
import { fetchProductById } from '@/api/fetchProductById';
import { Size } from '@/redux/slices/Cart/Cart.types';
import { RootState } from '@/redux/store';
import { SelectChangeEvent } from '@mui/material';

interface Props {
    id: number;
}

export const ProductItemDetail: FC<Props> = ({ id }) => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState<ProductType | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<Size>('S');
    const selectedSizeQuantity = useSelector((state: RootState) => {
        const item = state.cart.cart.find((item) => item.id === id);
        return item?.quantities[selectedSize] || 0;
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProduct = await fetchProductById(id);
                setProduct(fetchedProduct);
            } catch (_error) {
                setError('An error occurred while fetching the product.');
            }
        };

        fetchData();
    }, [id]);

    const handleAddToCart = () => {
        if (product && selectedSizeQuantity < product.totalQuantity[selectedSize]) {
            dispatch(addToCart({ id, size: selectedSize }));
        } else {
            setError(`No more ${selectedSize} size available.`);
        }
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart({ id, size: selectedSize }));
    };

    const handleSizeChange = (e: SelectChangeEvent<Size>) => {
        setSelectedSize(e.target.value as Size);
    };

    if (!product) {
        return <CircularProgress />;
    }

    return (
        <Box>


            <Image src={product.img} alt={product.name} width={200} height={250} priority />
            <Typography>{product.name}</Typography>
            <Typography>{`${product.price} $`}</Typography>
            {Object.keys(product.totalQuantity).map(size => (
                <Typography key={size}>{size}: {product.totalQuantity[size as Size]}</Typography>
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
                    {Object.keys(product.totalQuantity).map(size => (
                        <MenuItem key={size} value={size} disabled={product.totalQuantity[size as Size] === 0}
                        >{size}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div>
                <Typography>{selectedSize}: {selectedSizeQuantity}</Typography>
                <Button onClick={handleAddToCart}>Add to cart</Button>
                <Button onClick={handleRemoveFromCart}>Remove from cart</Button>
            </div>
        </Box>
    );
};
