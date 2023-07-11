import { useState, ChangeEvent, FormEvent, useContext, FC } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import { Button, Input } from '@mui/material';
import { AuthContext } from '@/context/AuthContext';

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
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
};
