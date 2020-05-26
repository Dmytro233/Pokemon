import React from "react";
import Grid from "@material-ui/core/Grid";
import PokemonItem from "./Item";
import useStyles from "../styles";

export default function PokemonList() {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <Grid container className={classes.gridContainer} spacing={3}>
        <Grid item className={classes.gridItem} xs={12} sm={6} md={4}>
          <PokemonItem />
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={6} md={4}>
          <PokemonItem />
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={6} md={4}>
          <PokemonItem />
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={6} md={4}>
          <PokemonItem />
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={6} md={4}>
          <PokemonItem />
        </Grid>
        <Grid item className={classes.gridItem} xs={12} sm={6} md={4}>
          <PokemonItem />
        </Grid>
      </Grid>
    </div>
  );
}
