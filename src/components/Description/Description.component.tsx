import React, { FC } from 'react';
import {
  DesktopContainer,
  DesktopContent,
  DesktopDescriptionItem,
  descriptionText,
} from '@/components/Description/Description.styles';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { descriptionItems } from '@/data/auth.data';

export const Description: FC = () => (
  <DesktopContainer>
    <DesktopContent>
      {descriptionItems.map(({ src, alt, description }) => (
        <DesktopDescriptionItem key={src}>
          <Image src={src} alt={alt} width={150} height={150} priority />
          <Typography component="h2" sx={descriptionText}>
            {description}
          </Typography>
        </DesktopDescriptionItem>
      ))}
    </DesktopContent>
  </DesktopContainer>
);
