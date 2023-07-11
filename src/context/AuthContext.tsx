import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { auth } from '@/firebase/firebaseConfig';
import {
    signInWithEmailAndPassword,
    Auth,
    UserCredential,
} from 'firebase/auth';
import { useRouter } from 'next/router';

interface AuthContextProps {
    user: UserCredential | null;
    login: (auth: Auth, email: string, password: string) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: () => { },
    logout: () => { },
});

const AuthProvider = ({ children }: AuthProviderProps) => {
    const router = useRouter();
    const [user, setUser] = useState<UserCredential | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user as unknown as UserCredential | null);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                router.push('/');
            } else {
                router.push('/auth');
            }
        });
        return () => unsubscribe();
    }, [auth.onAuthStateChanged]);

    const login = async (auth: Auth, email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
