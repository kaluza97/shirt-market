import { ReactElement } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { PagePaths } from '@/constants/pages';

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
    path: PagePaths.BROWSE_PAGE,
    icon: <SearchOutlinedIcon />,
  },
  {
    name: 'Favorites',
    path: PagePaths.FAVORITES_PAGE,
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    name: 'Cart',
    path: PagePaths.CART_PAGE,
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    name: 'Profile',
    path: PagePaths.PROFILE_PAGE,
    icon: <PersonOutlineOutlinedIcon />,
  },
];
