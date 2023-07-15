import { createTheme } from '@mui/material/styles';
import { Colors } from './variables';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
});
