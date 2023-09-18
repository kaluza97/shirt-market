import React, { FC, Suspense } from 'react';
import { Card, CircularProgress } from '@mui/material';
import { bannerData } from '@/data/banner.data';
import Image from 'next/image';
import {
  BannerContainer,
  BannerWrapper,
  Img,
} from '@/components/Banner/Banner.styles';

export const Banner: FC = () => (
  <Card>
    <Suspense fallback={<CircularProgress />}>
      <BannerWrapper>
        <BannerContainer>
          {bannerData.map(({ src, alt }) => (
            <Img key={src} alt={alt} src={src} width={500} height={600} />
          ))}
        </BannerContainer>
      </BannerWrapper>
    </Suspense>
  </Card>
);
