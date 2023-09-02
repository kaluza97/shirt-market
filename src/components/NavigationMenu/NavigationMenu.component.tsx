import { FC, useState, MouseEvent, useEffect } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import {
  IconContainer,
  NavigationContainer,
  menuIcon,
} from '@/components/NavigationMenu/NavigationMenu.styles';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Logo } from '@/components/Logo/Logo.component';
import { useRouter } from 'next/router';
import { navigationData } from '@/data/navigation.data';
import { Pages } from '@/constants/pages';
import { useSelector } from '@/redux/hooks';

export const NavigationMenu: FC = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { push } = useRouter();

  useEffect(() => {
    const newTotalQuantity = cartItems.reduce(
      (total, item) =>
        total +
        Object.values(item.quantities).reduce(
          (sum, quantity) => sum + quantity,
          0
        ),
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  const handleMoreMenu = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCartMenu = () => {
    push(Pages.CART_PAGE);
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
          <ShoppingCartOutlinedIcon sx={menuIcon} /> {totalQuantity}
        </IconButton>
        <IconButton aria-label="more" onClick={handleMoreMenu}>
          <MenuIcon sx={menuIcon} />
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
