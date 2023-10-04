import { FC } from 'react';
import {
  BasicFooterContainer,
  LinkStyled,
  Svg,
  basicFooterText,
} from '@/components/Footer/Footer.styles';
import { Typography } from '@mui/material';
import Image from 'next/image';

export const BasicFooter: FC = () => (
  <BasicFooterContainer>
    <Svg viewBox="0 0 1440 320">
      <path
        fillOpacity="1"
        d="M0,160L60,149.3C120,139,240,117,360,138.7C480,160,600,224,720,208C840,192,960,96,1080,74.7C1200,53,1320,107,1380,133.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </Svg>
    <Typography component="h3" sx={basicFooterText}>
      Website created by Piotr Kałużny
      <LinkStyled href="https://www.linkedin.com/in/piotr-kaluzny-066183177/">
        <Image
          src="/assets/linkedinLogo.png"
          width={30}
          height={30}
          alt="Linkedin icon"
        />
      </LinkStyled>
      <LinkStyled href="https://github.com/kaluza97">
        <Image
          src="/assets/githubLogo.png"
          width={30}
          height={30}
          alt="Github icon"
        />
      </LinkStyled>
    </Typography>
  </BasicFooterContainer>
);
