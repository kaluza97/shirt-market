import React, { FC, Suspense } from 'react';
import { Card, CardMedia, CircularProgress } from '@mui/material';
import { bannerData } from '@/data/banner.data';

export const Banner: FC = () => (
  <Card>
    {bannerData.map(({ src, alt }) => (
      <Suspense fallback={<CircularProgress />} key={src}>
        <CardMedia
          component="img"
          height="640"
          image={`/assets/${src}.jpg`}
          alt={alt}
        />
      </Suspense>
    ))}
  </Card>
);
