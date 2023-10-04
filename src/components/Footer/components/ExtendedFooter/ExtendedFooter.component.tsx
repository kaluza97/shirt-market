import { FC } from 'react';
import {
  ExtendedFooterContainer,
  ExtendedFooterSection,
  LinkStyled,
  footerHeaderText,
  footerText,
} from '@/components/Footer/Footer.styles';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { footerData } from '@/data/footer.data';

export const ExtendedFooter: FC = () => (
  <ExtendedFooterContainer>
    {footerData.map(({ header, links, socialLinks }) => (
      <ExtendedFooterSection key={header}>
        <Typography sx={footerHeaderText}>{header}</Typography>
        {links &&
          links.map((link, linkIndex) => (
            <Typography key={linkIndex} sx={footerText}>
              {link}
            </Typography>
          ))}
        <div>
          {socialLinks &&
            socialLinks.map(({ src, href, text }) => (
              <LinkStyled key={src} href={href}>
                <Image src={src} width={30} height={30} alt={`${text} logo`} />
              </LinkStyled>
            ))}
        </div>
      </ExtendedFooterSection>
    ))}
  </ExtendedFooterContainer>
);
