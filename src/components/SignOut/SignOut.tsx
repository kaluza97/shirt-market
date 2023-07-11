import Button from '@mui/material/Button';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

export const SignOut = () => {
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
