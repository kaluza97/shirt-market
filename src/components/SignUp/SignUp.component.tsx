import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { AuthContext } from '@/context/AuthContext';
import { TextField, Button } from '@mui/material';
import {
  inputText,
  submitButton,
} from '../SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.styles';
import { AuthError } from '../ErrorMessages/AuthError.component';
import { Terms } from '@/components/Terms/Terms.component';
import { SignUpFormWrapper } from './SingUp.styles';

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



  return (
    <SignUpFormWrapper>
      <form onSubmit={handleSubmit}>
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
          sx={inputText}
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
          sx={inputText}
        />
        <Terms />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={submitButton}
        >
          Sign Up
        </Button>
        <AuthError />
      </form>
    </SignUpFormWrapper>
  );
};

export default SignUp;
