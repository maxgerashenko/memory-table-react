import React from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  CssBaseline, useMediaQuery, Button
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './style.css';
import theme from './theme';
import Wellcome from './app/wellcome';
import {MemoryTable} from './app/memoryTable';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          // type: 'dark',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wellcome name="Memory Table" />
      <MemoryTable />
    </ThemeProvider>
  );
}

render(<App />, document.getElementById('root'));
