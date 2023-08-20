import { FC } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { LinkStyled, TermsContainer } from '@/components/Terms/Terms.styles';

export const Terms: FC = () => {
  const terms = () => (
    <TermsContainer>
      <p>This is an example of</p>
      <LinkStyled href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">
        terms
      </LinkStyled>
    </TermsContainer>
  );

  return <FormControlLabel required control={<Checkbox />} label={terms()} />;
};
