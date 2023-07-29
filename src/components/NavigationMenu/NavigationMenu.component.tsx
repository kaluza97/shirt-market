import { FC, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { IconContainer, NavigationContainer } from './NavigationMenu.styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from '../Logo/Logo.component';
import { useRouter } from 'next/router';
import { navigationData } from '@/data/navigationData';

export const NavigationMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { push } = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon fontSize='large' />
      </IconButton>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >

        {navigationData.map(({ name, path, icon }) =>
          <MenuItem key={path} onClick={() => handleMenuItemClick(path)} disableRipple >
            <IconContainer>
              {icon}
            </IconContainer>
            {name}
          </MenuItem>
        )}
      </Menu>
    </NavigationContainer>
  );
};
