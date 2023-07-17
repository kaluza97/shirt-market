import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { AuthContext } from '@/context/AuthContext';
import { mainTheme } from '@/styles/material.styles';
import { ThemeProvider } from '@emotion/react';
import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import {
  InputText,
  SubmitButton,
} from '../SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.styles';
import { Link, TermsContainer } from './SignUp.styles';
import { AuthError } from '../ErrorMessages/AuthError.component';

export const SignUp: FC = () => {
  const auth = getAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { register } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(auth, email, password);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const terms = () => (
    <TermsContainer>
      <p>this is an example of</p>
      <Link href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">
        terms
      </Link>
    </TermsContainer>
  );

  return (
    <form onSubmit={handleSubmit}>
      <ThemeProvider theme={mainTheme}>
        <TextField
          variant="standard"
          label="Email Address"
          value={email}
          onChange={handleEmailChange}
          required
          fullWidth
          name="registerEmail"
          autoFocus
          size="small"
          InputLabelProps={{ shrink: true }}
          sx={InputText}
        />
        <TextField
          value={password}
          label="Password"
          onChange={handlePasswordChange}
          variant="standard"
          required
          fullWidth
          name="registerPassword"
          type="password"
          size="small"
          InputLabelProps={{ shrink: true }}
          sx={InputText}
        />
        <FormControlLabel required control={<Checkbox />} label={terms()} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={SubmitButton}
        >
          Sign Up
        </Button>
      </ThemeProvider>
      <AuthError />
    </form>
  );
};

export default SignUp;
