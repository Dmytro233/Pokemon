import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PokemonList from "../components/List";
import PokemonDetails from "../components/Details";
import useStyles from "../styles";

export default function PokemonPage() {
  const classes = useStyles();
  const [showUrl, setShowUrl] = useState("");

  const showClick = (url) => {
    setShowUrl(url);
  };

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
          <Grid item className={classes.gridItem} xs={12} md={8}>
            <PokemonList onShowClick={showClick} />
          </Grid>
          <Grid item className={classes.gridItem} xs={12} md={4}>
            <PokemonDetails showUrl={showUrl} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
