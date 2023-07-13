import { ReactNode } from 'react';
import { Auth } from '@firebase/auth';
import { FirebaseError } from '@firebase/util';
import { ZodType, z } from 'zod';

export interface AuthContextProps {
  authError: FirebaseError;
  login: (auth: Auth, email: string, password: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthErrorSchema: ZodType<FirebaseError> = z.object({
  code: z.string(),
  name: z.string(),
  message: z.string(),
});
