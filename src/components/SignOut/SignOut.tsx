import { FC, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import Button from '@mui/material/Button';

export const SignOut: FC = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <Button variant="outlined" onClick={handleLogout}>
            Logout
        </Button>
    );
};
