import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default ({ number = "  ", code = ",,," }) => {
  const classes = useStyles();

  const valueTemplate = value => (
    <Grid item xs={4} sm={4} md={4}>
      <Paper className={classes.paper}>{value}</Paper>
    </Grid>
  );

  const numbers = number.split("").map(valueTemplate);
  const codes = code.split(",").map(valueTemplate);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="subtitle1">
            Number
          </Typography>
        </Grid>
        <Grid item xs container spacing={2}>
          {numbers}
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="subtitle1">
            Code
          </Typography>
        </Grid>
        <Grid item xs container spacing={2}>
          {codes}
        </Grid>
      </Paper>
    </div>
  );
};
