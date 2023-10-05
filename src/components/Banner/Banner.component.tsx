import React, { FC, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { bannerData } from '@/data/banner.data';
import {
  BannerContainer,
  ImageWrapper,
} from '@/components/Banner/Banner.styles';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const Banner: FC = () => {
  const { push } = useRouter();

  const handleNavigate = (path: string) => {
    push(path);
  };

  return (
    <BannerContainer>
      <Suspense fallback={<CircularProgress />}>
        {bannerData.map(({ src, alt, path }) => (
          <ImageWrapper key={src}>
            <Image
              alt={alt}
              src={src}
              fill
              onClick={() => handleNavigate(path)}
            />
          </ImageWrapper>
        ))}
      </Suspense>
    </BannerContainer>
  );
};
