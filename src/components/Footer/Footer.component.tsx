import { FC } from 'react';
import { FooterContainer, Svg, TextFooter } from './Footer.styles';
import { Typography } from '@mui/material';

export const Footer: FC = () => (
  <FooterContainer>
    <Svg viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,138.7C480,160,600,224,720,208C840,192,960,96,1080,74.7C1200,53,1320,107,1380,133.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
    </path>
    </Svg>
    <Typography component='h3' sx={TextFooter}>
      Website created by Piotr Kałużny
    </Typography>
  </FooterContainer>
);

