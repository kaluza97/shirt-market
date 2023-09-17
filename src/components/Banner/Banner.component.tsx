import React, { FC, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import { bannerData } from '@/data/banner.data';
import { BannerContainer, Img } from '@/components/Banner/Banner.styles';
import { useRouter } from 'next/router';

export const Banner: FC = () => {
  const { push } = useRouter();

  const handleNavigate = (path: string) => {
    push(path);
  };

  return (
    <Suspense fallback={<CircularProgress />}>
      <BannerContainer>
        {bannerData.map(({ src, alt, path }) => (
          <Img
            key={src}
            alt={alt}
            src={src}
            width={400}
            height={600}
            onClick={() => handleNavigate(path)}
            style={{
              objectFit: 'contain',
            }}
          />
        ))}
      </BannerContainer>
    </Suspense>
  );
};
