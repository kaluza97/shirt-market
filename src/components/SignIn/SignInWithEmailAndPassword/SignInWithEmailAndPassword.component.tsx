import {
  useState,
  ChangeEvent,
  FormEvent,
  useContext,
  FC,
  useEffect,
} from 'react';
import { auth } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/router';
import { Button, TextField, Typography } from '@mui/material';
import { AuthContext } from '@/context/Auth.context';
import {
  SignInFormWrapper,
  inputText,
  paragraph,
  submitButton,
} from '@/components/SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.styles';
import { AuthError } from '@/components/Messages/components/AuthError/AuthError.component';
import { Pages } from '@/constants/pages';

export const SignInWithEmailPassword: FC = () => {
  const { login, user } = useContext(AuthContext);
  const { push } = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    user && push(Pages.HOME_PAGE);
  }, [user, push]);

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
    <SignInFormWrapper>
      <form onSubmit={handleSubmit}>
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
          sx={inputText}
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
          sx={inputText}
        />
        <Typography component="p" sx={paragraph}>
          Forgot password?
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={submitButton}
        >
          Sign In
        </Button>
        <AuthError />
      </form>
    </SignInFormWrapper>
  );
};
