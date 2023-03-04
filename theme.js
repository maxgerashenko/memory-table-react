import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  spacing: 4,
});

export const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
