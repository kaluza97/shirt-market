import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { SyntheticEvent, useState } from 'react';
import { NavigationMenuContainer } from './NavigationMenu.styles';

const NavigationMenu = () => {
  const [navigationItem, setNavigationItem] = useState<number>(0);

  return (
    <Paper sx={NavigationMenuContainer} elevation={3}>
      <BottomNavigation
        showLabels
        value={navigationItem}
        onChange={(_event: SyntheticEvent, newValue: number) => {
          setNavigationItem(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction label="Browse" icon={<SearchOutlinedIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteBorderOutlinedIcon />} />
        <BottomNavigationAction label="Basket" icon={<ShoppingCartOutlinedIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonOutlineOutlinedIcon />} />
      </BottomNavigation>

    </Paper>
  );
};

export default NavigationMenu;
