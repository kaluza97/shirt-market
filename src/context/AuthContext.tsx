import React, { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import {
    signInWithEmailAndPassword,
    Auth,
    UserCredential,
} from 'firebase/auth';
import { useRouter } from 'next/router';

interface AuthContextProps {
    userData: UserCredential | null;
    authError: string | null,
    login: (auth: Auth, email: string, password: string) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({
    userData: null,
    authError: null,
    login: () => { },
    logout: () => { },
});

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const router = useRouter();
    const [userData, setUser] = useState<UserCredential | null>(null);
    const [authError, setAuthError] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userData) => {
            setUser(userData as UserCredential | null);

            if (userData) {
                router.push('/');
            } else {
                router.push('/auth');
            }
        });
        return () => unsubscribe();
    }, [auth.onAuthStateChanged]);

    const login = async (auth: Auth, email: string, password: string) => {
        try {
            setAuthError(null);
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setAuthError(error as string);
        }
    };

    const logout = async () => {
        try {
            setAuthError(null);
            await auth.signOut();
        } catch (error) {
            setAuthError(error as string);
        }
    };

    return (
        <AuthContext.Provider value={{ userData, authError, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
