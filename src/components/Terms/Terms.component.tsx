import { FC } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { LinkStyled, TermsContainer } from '@/components/Terms/Terms.styles';
import { privacyPolicyLink } from '@/constants/links';

export const Terms: FC = () => {
  const terms = () => (
    <TermsContainer>
      <p>This is an example of</p>
      <LinkStyled href={privacyPolicyLink}>
        terms
      </LinkStyled>
    </TermsContainer>
  );

  return <FormControlLabel required control={<Checkbox />} label={terms()} />;
};
