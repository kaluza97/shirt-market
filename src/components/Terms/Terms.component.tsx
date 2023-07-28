import { FC } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Link, TermsContainer } from '@/components/Terms/Terms.styles';

export const Terms: FC = () => {
  const terms = () => (
    <TermsContainer>
      <p>This is an example of</p>
      <Link href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">
        terms
      </Link>
    </TermsContainer>
  );

  return <FormControlLabel required control={<Checkbox />} label={terms()} />;
};
