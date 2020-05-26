import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles";
import img from "./spring-276014.jpg";

export default function PokemonDetails() {
  const classes = useStyles();

  return (
    <Paper className={classes.item}>
      <img src={img} className={classes.itemImage} />
      <Grid container className={classes.gridContainer} spacing={1}>
        <Grid item className={classes.itemName} xs={12}>
          <Typography variant="subtitle1">Bulbazar</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.gridContainer} spacing={1}>
        <Grid item className={classes.itemName} xs={6}>
          <div className={classes.itemPower}>
            <Typography variant="subtitle2">Grass</Typography>
          </div>
        </Grid>
        <Grid item className={classes.itemName} xs={6}>
          <div className={classes.itemPower}>
            <Typography variant="subtitle2">Poison</Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
