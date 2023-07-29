import React, { FC, Suspense } from 'react';
import {
  Card,
  CardMedia,
} from '@mui/material';
import { HomeBannerContainer } from './HomeBanner.styles';
import { bannerData } from '@/data/bannerData';
import { CircularLoading } from '../CircularLoading/CircularLoading.component';

export const HomeBanner: FC = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <HomeBannerContainer>
      <Card>
        {bannerData.map(({ src, alt }) => (
          <Suspense fallback={<CircularLoading />} key={src}>
            <CardMedia
              component="img"
              height="594"
              image={`/assets/${src}.jpg`}
              alt={alt}
            />
          </Suspense>
        ))}
      </Card>
    </HomeBannerContainer>
  );
};
