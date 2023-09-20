import { FC, useContext } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import { listLogoutContainer } from '@/components/ProfileMenu/ProfileMenu.styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '@/context/Auth.context';
import { useRouter } from 'next/router';
import { PagePaths } from '@/constants/pages';
import { pointerText } from '@/styles/global.styles';

export const ProfileMenu: FC = () => {
  const { logout } = useContext(AuthContext);
  const { push } = useRouter();

  const handleLogout = () => {
    logout();
  };

  const handleNavigate = (path: PagePaths) => {
    push(path);
  };

  return (
    <List>
      <ListItem
        disablePadding
        onClick={() => handleNavigate(PagePaths.CART_PAGE)}
      >
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        onClick={() => handleNavigate(PagePaths.ORDER_PAGE)}
      >
        <ListItemButton>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
      </ListItem>
      <ListItem sx={listLogoutContainer} onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" sx={pointerText} />
      </ListItem>
    </List>
  );
};
