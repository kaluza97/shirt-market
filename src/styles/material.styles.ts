import { createTheme } from '@mui/material/styles';
import { Colors, FontFamily } from './variables';

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
    fontFamily: FontFamily.main,
  },
});
