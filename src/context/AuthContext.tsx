import React, { FC, createContext, useEffect, useState } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import { signInWithEmailAndPassword, Auth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { FirebaseError } from '@firebase/util';
import {
  AuthContextProps,
  AuthProviderProps,
  AuthErrorSchema,
} from './AuthContext.interface';

const initialAuthError: FirebaseError = { code: '', name: '', message: '' };

const AuthContext = createContext<AuthContextProps>({
  authError: initialAuthError,
  login: () => { },
  logout: () => { },
});

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const [authError, setAuthError] = useState<FirebaseError>(initialAuthError);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      if (userData) {
        router.push('/');
      }
      else {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (auth: Auth, email: string, password: string) => {
    try {
      setAuthError(initialAuthError);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const parsedError = AuthErrorSchema.safeParse(error);
      if (parsedError.success) {
        setAuthError(parsedError.data);
      } else {
        setAuthError({
          code: 'Something went wrong. Please try again later.',
          name: '',
          message: 'Parse error',
        });
      }
    }
  };

  const logout = async () => {
    try {
      setAuthError(initialAuthError);
      await auth.signOut();
    } catch (error) {
      const parsedError = AuthErrorSchema.safeParse(error);
      if (parsedError.success) setAuthError(parsedError.data);
      else
        setAuthError({
          code: 'Something went wrong. Please try again later.',
          name: '',
          message: 'Parse error',
        });
    }
  };

  return (
    <AuthContext.Provider value={{ authError, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
