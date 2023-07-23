import React, { FC } from "react";
import useSWR from "swr";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { ProductType } from "@/components/Products/ProductsList.types";
import { fetcher, truncateTextToThreeWords } from "@/utils/utils";
import { CircularLoading } from "../CircularLoading/CircularLoading.component";
import { ErrorMessage } from "../ErrorMessages/ErrorMessage.component";
import { Box, Card, CardActions, CardContent } from "@mui/material";
import { ProductsListContainer, card, cardContainer, cardHeaderText, cardText, cardTitleText, productContainer } from "@/components/Products/ProductsList.styles";

export const ProductsList: FC = () => {

    const url = `https://fakestoreapi.com/products/category/men's clothing`;
    const { data, error, isLoading } = useSWR<ProductType[]>(url, fetcher);

    const product = data?.map(({ image, title, price }) => (
        <Box sx={cardContainer}>
            <Card sx={card}>
                <CardContent>
                    <Image
                        src={image}
                        alt={title}
                        width={140}
                        height={170}
                        priority
                    />

                </CardContent>
            </Card >
            <Typography sx={cardTitleText}>
                {truncateTextToThreeWords(title)}
            </Typography>
            <Typography sx={cardText}>
                {price} $
            </Typography>
        </Box>
    ));

    return (
        <ProductsListContainer>
            <Typography component='h3' variant='h4' sx={cardHeaderText}>
                New bestsellers products
            </Typography>
            <Box sx={productContainer}>
                {isLoading ? <CircularLoading /> : product}
                <ErrorMessage errorMessage={error?.message} />
            </Box>
        </ProductsListContainer>
    );
};


