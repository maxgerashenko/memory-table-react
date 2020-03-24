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
import {CountdownTemplate} from './app/countdownTemplate';
import {Countdown} from './app/countdown';

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

  const props = {
    minutes: 1,
    seconds: 10,
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wellcome name="Memory Table" />
      <MemoryTable />
      <Countdown>
      {props => (
        <CountdownTemplate
          minutes={props.minutes}
          seconds={props.seconds}
        />
      )}
    </Countdown>
      
    </ThemeProvider>
  );
}

render(<App />, document.getElementById('root'));
