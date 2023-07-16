import { useState, ChangeEvent, FormEvent, useContext, FC } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import { Button, TextField, ThemeProvider, Typography } from '@mui/material';
import { AuthContext } from '@/context/AuthContext';
import {
  InputText,
  Paragraph,
  SubmitButton,
} from './SignInWithEmailAndPassword.styles';
import { mainTheme } from '@/styles/material.styles';
import { AuthError } from '@/components/ErrorMessages/AuthError.component';

export const SignInWithEmailPassword: FC = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(auth, email, password);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

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
          name="email"
          autoComplete="email"
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
          name="password"
          type="password"
          autoComplete="password"
          size="small"
          InputLabelProps={{ shrink: true }}
          sx={InputText}
        />
        <Typography component="p" sx={Paragraph}>
          Forgot password?
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={SubmitButton}
        >
          Sign In
        </Button>
      </ThemeProvider>
      <AuthError />
    </form>
  );
};
