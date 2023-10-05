import { FC } from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { LinkStyled, TermsContainer } from '@/components/Terms/Terms.styles';
import { privacyPolicyLink } from '@/constants/links';
import { normalTextBlack } from '@/styles/global.styles';

export const Terms: FC = () => {
  const terms = () => (
    <TermsContainer>
      <Typography sx={normalTextBlack}>This is an example of</Typography>
      <LinkStyled href={privacyPolicyLink}>terms</LinkStyled>
    </TermsContainer>
  );

  return <FormControlLabel required control={<Checkbox />} label={terms()} />;
};
