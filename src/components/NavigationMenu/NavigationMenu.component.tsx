import { FC, useState, MouseEvent } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import {
  IconContainer,
  NavigationContainer,
} from '@/components/NavigationMenu/NavigationMenu.styles';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Logo } from '@/components/Logo/Logo.component';
import { useRouter } from 'next/router';
import { navigationData } from '@/data/navigation.data';

export const NavigationMenu: FC = () => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const { push } = useRouter();

  const handleMoreMenu = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCartMenu = () => {
    push('/cart');
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
      <div>
        <IconButton aria-label="cart" onClick={handleCartMenu}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <IconButton aria-label="more" onClick={handleMoreMenu}>
          <MenuIcon />
        </IconButton>
      </div>
      <Menu anchorEl={menuAnchor} open={!!menuAnchor} onClose={handleClose}>
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
