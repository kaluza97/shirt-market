import { FC, useContext } from 'react';
import { AuthContext } from '@/context/Auth.context';
import { SignOutWrapperProps } from '@/components/SignOut/SignOut.types';

export const SignOutWrapper: FC<SignOutWrapperProps> = ({ children }) => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return <div onClick={handleLogout}>{children}</div>;
};
