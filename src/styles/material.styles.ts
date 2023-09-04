import { createTheme } from '@mui/material/styles';
import { Colors, FontFamily } from '@/styles/variables';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    success: {
      main: Colors.primary,
    },
    error: {
      main: Colors.red,
    },
    warning: {
      main: Colors.yellow,
    },
  },
  typography: {
    fontSize: 18,
    fontFamily: FontFamily.sans,
  },
});
