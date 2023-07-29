import { FC, ReactNode, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

type Props = {
  children: ReactNode;
};

export const SignOutWrapper: FC<Props> = ({ children }) => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div onClick={handleLogout}>
      {children}
    </div>
  );
};
