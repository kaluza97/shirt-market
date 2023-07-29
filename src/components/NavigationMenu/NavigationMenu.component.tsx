import { FC, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { IconContainer, NavigationContainer } from '@/components/NavigationMenu/NavigationMenu.styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from '@/components/Logo/Logo.component';
import { useRouter } from 'next/router';
import { navigationData } from '@/data/navigationData';

export const NavigationMenu: FC = () => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const { push } = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setMenuAnchor(null);
  };

  const handleMenuItemClick = (route: string) => {
    handleClose();
    push(route);
  };

  return (
    <NavigationContainer>
      <Logo />
      <IconButton
        aria-label="more"
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Menu
        anchorEl={menuAnchor}
        open={!!menuAnchor}
        onClose={handleClose}
      >
        {navigationData.map(({ name, path, icon }) => (
          <MenuItem
            key={path}
            onClick={() => handleMenuItemClick(path)}
            disableRipple
          >
            <IconContainer>{icon}</IconContainer>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </NavigationContainer>
  );
};
