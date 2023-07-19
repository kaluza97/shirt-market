import React, { FC } from 'react';
import {
  DesktopContainer,
  DesktopContent,
  DesktopDescriptionItem,
  textDescription,
} from '@/components/DescriptionForm/Description.styles';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { DescriptionItems } from '@/data/authData';

const Description: FC = () => {
  return (
    <DesktopContainer>
      <DesktopContent>
        {DescriptionItems.map(({ src, alt, description }) => (
          <DesktopDescriptionItem key={src}>
            <Image
              src={`/assets/${src}.jpg`}
              alt={alt}
              width={150}
              height={150}
            />
            <Typography component="h2" sx={textDescription}>
              {description}
            </Typography>
          </DesktopDescriptionItem>
        ))}
      </DesktopContent>
    </DesktopContainer>
  );
};

export default Description;
