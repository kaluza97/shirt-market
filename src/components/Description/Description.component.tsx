import React, { FC } from 'react';
import {
  DesktopContainer,
  DesktopContent,
  DesktopDescriptionItem,
  Img,
  descriptionText,
} from '@/components/Description/Description.styles';
import { Typography } from '@mui/material';
import { descriptionItems } from '@/data/auth.data';

export const Description: FC = () => (
  <DesktopContainer>
    <DesktopContent>
      {descriptionItems.map(({ src, alt, description }) => (
        <DesktopDescriptionItem key={src}>
          <Img src={src} alt={alt} width={180} height={180} priority />
          <Typography component="h2" sx={descriptionText}>
            {description}
          </Typography>
        </DesktopDescriptionItem>
      ))}
    </DesktopContent>
  </DesktopContainer>
);
