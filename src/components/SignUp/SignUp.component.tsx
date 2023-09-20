import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { AuthContext } from '@/context/Auth.context';
import { TextField, Button } from '@mui/material';
import { inputText } from '@/components/SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.styles';
import { AuthError } from '@/components/Message/components/AuthError/AuthError.component';
import { Terms } from '@/components/Terms/Terms.component';
import { SignUpFormWrapper } from '@/components/SignUp/SingUp.styles';
import { button } from '@/styles/global.styles';

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
          sx={inputText}
        />
        <Terms />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={button}
        >
          Sign Up
        </Button>
        <AuthError />
      </form>
    </SignUpFormWrapper>
  );
};

export default SignUp;
