import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles";

export default function PokemonDetails() {
  const classes = useStyles();

  return (
    // <div className={classes.grid}>
    //   <Grid container className={classes.gridContainer} spacing={3}>
    //     <Grid item className={classes.gridItem} xs={12}>
    <Paper className={classes.item}>Details</Paper>
    //     </Grid>
    //   </Grid>
    // </div>
  );
}
