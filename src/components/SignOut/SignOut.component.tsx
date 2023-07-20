import { FC, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import Button from '@mui/material/Button';
import { logoutButton } from './SignOut.styles';

export const SignOut: FC = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Button variant="text" onClick={handleLogout} sx={logoutButton}>
      Logout
    </Button>
  );
};
