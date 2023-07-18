import { FC } from 'react';
import { Link, TermsContainer } from './Terms.styles';
import { Checkbox, FormControlLabel } from '@mui/material';

export const Terms: FC = () => {

    const terms = () => (
        <TermsContainer>
            <p>this is an example of</p>
            <Link href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">
                terms
            </Link>
        </TermsContainer>
    );

    return (
        <FormControlLabel required control={<Checkbox />} label={terms()} />
    );
};
