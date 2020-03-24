import React from 'react';
import PropTypes from 'prop-types';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import {Fab, Paper} from '@material-ui/core';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    fab: {
      textAling: 'right',
    }
  }),
);

const CountdownTemplate = props => {
  const { minutes, seconds, onReset} = props;
  const classes = useStyles();

  return (
    <Paper elevation={1} className={classes.fab}>
      <time
        className="CountdownDisplay"
        dateTime={`H${minutes}M${seconds}S`}
      >
      <Fab variant="extended" size="medium"   onClick={onReset}>
        <WatchLaterOutlinedIcon className={classes.extendedIcon} />
         {String(minutes).padStart(2, 0)}:{String(seconds).padStart(2, 0)}
      </Fab>
      </time>
    </Paper>
  );
};

CountdownTemplate.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export {CountdownTemplate};