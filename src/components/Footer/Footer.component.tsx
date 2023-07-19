import { FC } from 'react';
import {
  FooterContainer,
  Link,
  Svg,
  textFooter,
} from '@/components/Footer/Footer.styles';
import { Typography } from '@mui/material';
import Image from 'next/image';

export const Footer: FC = () => (
  <FooterContainer>
    <Svg viewBox="0 0 1440 320">
      <path
        fillOpacity="1"
        d="M0,160L60,149.3C120,139,240,117,360,138.7C480,160,600,224,720,208C840,192,960,96,1080,74.7C1200,53,1320,107,1380,133.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </Svg>
    <Typography component="h3" sx={textFooter}>
      Website created by Piotr Kałużny
      <Link href="https://www.linkedin.com/in/piotr-kaluzny-066183177/">
        <Image
          src="/assets/linkedin.png"
          width={50}
          height={50}
          alt="Linkedin icon"
        />
      </Link>
      <Link href="https://github.com/kaluza97">
        <Image
          src="/assets/github.png"
          width={50}
          height={50}
          alt="Github icon"
        />
      </Link>
    </Typography>
  </FooterContainer>
);
