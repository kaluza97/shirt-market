import { FC } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  listLogoutContainer,
  listItemText,
} from '@/components/ProfileList/ProfileList.styles';
import { SignOutWrapper } from '@/components/SignOut/SignOut.component';
import LogoutIcon from '@mui/icons-material/Logout';

export const ProfileList: FC = () => (
  <List>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Basket" />
      </ListItemButton>
    </ListItem>
    <SignOutWrapper>
      <ListItem sx={listLogoutContainer}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" sx={listItemText} />
      </ListItem>
    </SignOutWrapper>
  </List>
);
