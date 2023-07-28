import React, { FC } from 'react';
import {
  Card,
  CardMedia,
} from '@mui/material';
import { HomeBannerContainer } from './HomeBanner.styles';
import { bannerData } from '@/data/bannerData';

export const HomeBanner: FC = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <HomeBannerContainer>
      <Card>
        {bannerData.map(({ src, alt }) => (
          <CardMedia
            component="img"
            height="594"
            image={`/assets/${src}.jpg`}
            alt={alt}
          />
        ))}
      </Card>
    </HomeBannerContainer>
  );
};
