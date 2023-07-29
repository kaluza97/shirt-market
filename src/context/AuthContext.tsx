import React, { FC, createContext, useEffect, useState } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import {
  signInWithEmailAndPassword,
  Auth,
  createUserWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { FirebaseError } from '@firebase/util';
import {
  AuthContextProps,
  AuthProviderProps,
  AuthErrorSchema,
} from '@/context/AuthContext.types';

const initialAuthError: FirebaseError = { code: '', name: '', message: '' };

const AuthContext = createContext<AuthContextProps>({
  authError: initialAuthError,
  user: null,
  login: () => { },
  register: () => { },
  logout: () => { },
});

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { push } = useRouter();
  const [authError, setAuthError] = useState<FirebaseError>(initialAuthError);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
        push('/login');
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

  const register = async (auth: Auth, email: string, password: string) => {
    try {
      setAuthError(initialAuthError);
      await createUserWithEmailAndPassword(auth, email, password);
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
    <AuthContext.Provider value={{ authError, user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
