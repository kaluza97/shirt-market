import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { Size } from '@/redux/slices/Cart/CartSlice.interface';
import { ErrorMessage } from '../ErrorMessages/ErrorMessage.component';
import { AppDispatch } from '@/redux/store';


interface ProductDetailItemProps {
    id: number;
}

export const ProductDetailItem: FC<ProductDetailItemProps> = ({ id }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [product, setProduct] = useState<ProductType | null>(null);
    const [selectedSize, setSelectedSize] = useState<Size>('S');
    const [error, setError] = useState<null | Error>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProduct = await fetchProductById(id);
                setProduct(fetchedProduct);
            } catch (error) {
                setError(error as Error);
            }
        };

        fetchData();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ id, size: selectedSize, totalQuantities: product.totalQuantity[selectedSize] }));
        }
    };

    const handleRemoveFromCart = () => {
        if (product) {
            dispatch(removeFromCart({ id, size: selectedSize }));
        }
    };

    if (!product) {
        return <CircularProgress />;
    }


    return (
        <Box>
            {error ? (
                <ErrorMessage errorMessage={error} />
            ) : (
                <>
                    <Image src={product.img} alt={product.name} width={200} height={250} priority />
                    <Typography>{product.name}</Typography>
                    <Typography>{`${product.price} $`}</Typography>
                    <Typography>S: {product.totalQuantity.S}</Typography>
                    <Typography>M: {product.totalQuantity.M}</Typography>
                    <Typography>L: {product.totalQuantity.L}</Typography>
                    <Typography>XL: {product.totalQuantity.XL}</Typography>
                </>
            )}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="size-label">Size</InputLabel>
                <Select
                    labelId="size-label"
                    id="size-select"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value as 'S' | 'M' | 'L' | 'XL')}
                    label="Size"
                >
                    <MenuItem value="S">S</MenuItem>
                    <MenuItem value="M">M</MenuItem>
                    <MenuItem value="L">L</MenuItem>
                    <MenuItem value="XL">XL</MenuItem>
                </Select>
            </FormControl>

            <div>
                <Button onClick={handleAddToCart}>Add to cart</Button>
                <Button onClick={handleRemoveFromCart}>Remove from cart</Button>
            </div>
        </Box>
    );
};
