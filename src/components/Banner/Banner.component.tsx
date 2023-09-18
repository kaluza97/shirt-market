import React, { FC, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { bannerData } from '@/data/banner.data';
import { BannerContainer, Img } from '@/components/Banner/Banner.styles';

export const Banner: FC = () => (
  <Suspense fallback={<CircularProgress />}>
    <BannerContainer>
      {bannerData.map(({ src, alt }) => (
        <Img key={src} alt={alt} src={src} width={500} height={600} />
      ))}
    </BannerContainer>
  </Suspense>
);
