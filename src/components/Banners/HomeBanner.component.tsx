import React, { FC, Suspense } from 'react';
import { Card, CardMedia, CircularProgress } from '@mui/material';
import { HomeBannerContainer } from '@/components/Banners/HomeBanner.styles';
import { bannerData } from '@/data/bannerData';

export const HomeBanner: FC = () => {
  return (
    <HomeBannerContainer>
      <Card>
        {bannerData.map(({ src, alt }) => (
          <Suspense fallback={<CircularProgress />} key={src}>
            <CardMedia
              component="img"
              height="600"
              image={`/assets/${src}.jpg`}
              alt={alt}
            />
          </Suspense>
        ))}
      </Card>
    </HomeBannerContainer>
  );
};
