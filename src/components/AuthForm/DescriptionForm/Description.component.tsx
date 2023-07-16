import React, { FC } from 'react';
import {
    DesktopContainer,
    DesktopContent,
    DesktopDescriptionItem,
    TextDescription,
} from './Description.styles';
import { Typography } from '@mui/material';
import Image from 'next/image'

const Description: FC = () => {

    const DescriptionItems = [{
        src: 'delivery',
        alt: 'Courier with delivery',
        description: 'Fast delivery - our couriers will deliver the ordered product within 2 business days'
    },
    {
        src: 'shopping',
        alt: 'Woman shopping in an online store',
        description: 'Our online shop is a great place to buy your favourite products'
    },
    {
        src: 'happyClients',
        alt: 'Happy Clients',
        description: 'Join the group of satisfied customers'
    }]

    return (
        <DesktopContainer>
            <DesktopContent>
                {DescriptionItems.map(({ src, alt, description }, index) => (
                    <DesktopDescriptionItem key={index}>
                        <Image
                            src={`/assets/${src}.jpg`}
                            alt={alt}
                            width={210}
                            height={200}
                        />
                        <Typography component='h2' variant='h6' sx={TextDescription}>
                            {description}
                        </Typography>
                    </DesktopDescriptionItem>
                ))}
            </DesktopContent>
        </DesktopContainer>

    );
};

export default Description;
