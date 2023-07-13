import { useState, ChangeEvent, FormEvent, useContext, FC } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import { Button, TextField, Typography } from '@mui/material';
import { AuthContext } from '@/context/AuthContext';
import { Colors } from '@/styles/variables';

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
      <Typography color={Colors.primary}>Email Address</Typography>
      <TextField
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        required
        fullWidth
        name="email"
        autoComplete="email"
        autoFocus
        size="small"
        sx={{
          marginTop: '5px',
          marginBottom: '10px',
          backgroundColor: `${Colors.white}`,
          border: `1px solid ${Colors.primary}`,
          borderRadius: '5px',
        }}
      />
      <Typography color={Colors.primary}>Password</Typography>
      <TextField
        value={password}
        onChange={handlePasswordChange}
        variant="outlined"
        required
        fullWidth
        name="password"
        type="password"
        autoComplete="password"
        size="small"
        sx={{
          marginTop: '5px',
          marginBottom: '10px',
          backgroundColor: `${Colors.white}`,
          border: `1px solid ${Colors.primary}`,
          borderRadius: '5px',
        }}
      />
      <Button type="submit" fullWidth variant="contained" color="primary"
        sx={{
          marginTop: '16px',
          backgroundColor: `${Colors.primary}`,
          color: `${Colors.black}`,
          '&:hover': {
            backgroundColor: `${Colors.primary}`,
          },
        }}>
        Sign In
      </Button>
    </form>
  );
};
