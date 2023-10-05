import { FC } from 'react';
import { Typography } from '@mui/material';
import { LogoContainer, LogoImage } from '@/components/Logo/Logo.styles';
import { useRouter } from 'next/router';
import { PagePaths } from '@/constants/pages';
import { logoText } from '@/styles/global.styles';

export const Logo: FC = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push(PagePaths.HOME_PAGE);
  };

  return (
    <LogoContainer onClick={handleClick}>
      <LogoImage
        src="https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/shirt.png?alt=media&token=3c077eb6-62a4-40eb-be04-7446121baf5b"
        width={50}
        height={50}
        alt="Green shirt"
      />
      <Typography component="h1" variant="h4" sx={logoText}>
        Shirt Market
      </Typography>
    </LogoContainer>
  );
};
