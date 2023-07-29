import { FC } from 'react';
import { Typography } from '@mui/material';
import { LogoContainer, logoText, LogoImage } from '@/components/Logo/Logo.styles';

export const Logo: FC = () => (
  <LogoContainer>
    <LogoImage
      src="/assets/shirt.png"
      width={50}
      height={50}
      alt="Green shirt"
    />
    <Typography component="h1" variant="h5" sx={logoText}>
      Shirt Market
    </Typography>
  </LogoContainer>
);
