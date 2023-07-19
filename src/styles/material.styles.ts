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
  },
  typography: {
    fontSize: 18,
    fontFamily: FontFamily.main,
  },
});
