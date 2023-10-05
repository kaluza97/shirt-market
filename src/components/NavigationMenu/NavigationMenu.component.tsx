import { FC, useState, MouseEvent } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useSelector } from '@/redux/hooks';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  NavigationTopSpacer,
  IconContainer,
  Navigation,
  NavigationContainer,
  QuantityContainer,
  cartMenuItem,
  menuIcon,
  menuItem,
} from '@/components/NavigationMenu/NavigationMenu.styles';
import { Logo } from '@/components/Logo/Logo.component';
import { summedQuantities } from '@/components/NavigationMenu/NavigationMenu.utils';
import { navigationData } from '@/data/navigation.data';
import { PagePaths } from '@/constants/pages';

export const NavigationMenu: FC = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const quantities = cartItems.map(({ quantities }) => quantities);
  const totalQuantity = summedQuantities(quantities);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const { push } = useRouter();

  const handleMoreMenu = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCartMenu = () => {
    push(PagePaths.CART_PAGE);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  const handleMenuItemClick = (route: string) => {
    handleClose();
    push(route);
  };

  return (
    <>
      <NavigationContainer>
        <Navigation>
          <Logo />
          <div>
            <IconButton
              aria-label="cart"
              onClick={handleCartMenu}
              sx={cartMenuItem}
            >
              <ShoppingCartOutlinedIcon sx={menuIcon} />
              <QuantityContainer>{totalQuantity}</QuantityContainer>
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
                sx={menuItem}
                disableRipple
              >
                <IconContainer>{icon}</IconContainer>
                {name}
              </MenuItem>
            ))}
          </Menu>
        </Navigation>
      </NavigationContainer>
      <NavigationTopSpacer />
    </>
  );
};
