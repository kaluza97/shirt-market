import { ReactElement } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

type NavigationItem = {
  name: string;
  path: string;
  icon: ReactElement;
};

export const navigationData: Array<NavigationItem> = [
  {
    name: 'Home',
    path: '/',
    icon: <HomeOutlinedIcon />,
  },
  {
    name: 'Browse',
    path: '/browse',
    icon: <SearchOutlinedIcon />,
  },
  {
    name: 'Favorites',
    path: '/favorites',
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    name: 'Cart',
    path: '/cart',
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <PersonOutlineOutlinedIcon />,
  },
];
