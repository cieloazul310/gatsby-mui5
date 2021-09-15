import { createTheme, ThemeOptions } from '@mui/material/styles';
import { teal, orange } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: teal,
          secondary: orange,
        }
      : {
          // palette values for dark mode
          primary: {
            main: teal[200],
          },
          secondary: {
            main: orange[200],
          },
        }),
  },
});

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },
});

export default theme;
