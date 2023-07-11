import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import { Input } from '@mui/material';
import { AuthContext } from '@/context/AuthContext';

interface SignInForm {
  email: string;
  password: string;
}

const SignInWithEmailPassword: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [signInForm, setSignInForm] = useState<SignInForm>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(auth, signInForm.email, signInForm.password);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        value={signInForm.email}
        onChange={handleChange}
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        value={signInForm.password}
        onChange={handleChange}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInWithEmailPassword;
