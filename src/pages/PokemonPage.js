import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PokemonList from "../components/List";
import PokemonDetails from "../components/Details";
import axios from "axios";

import useStyles from "../styles";

export default function PokemonPage() {
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("http://pokeapi.salestock.net/api/v2/pokemon/?limit=12")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={classes.title}>
        <Typography variant="h2">Pokedex</Typography>
      </div>

      <div className={classes.grid}>
        <Grid
          container
          className={classes.gridContainer}
          alignItems="center"
          spacing={3}
        >
          <Grid item className={classes.gridItem} xs={8}>
            <PokemonList />
          </Grid>
          <Grid item className={classes.gridItem} xs={4}>
            <PokemonDetails />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
