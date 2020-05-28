import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import useStyles from "../styles";

const choseColor = (typeName) => {
  if (typeName === "poison") return "violet";
  if (typeName === "grass") return "green";
  if (typeName === "fire") return "red";
  if (typeName === "flying") return "skyblue";
  if (typeName === "water") return "blue";
  if (typeName === "bug") return "grey";
  if (typeName === "electric") return "yellow";
};

export default function PokemonItem({ pokemon, onShowClick }) {
  const classes = useStyles();
  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then(function (response) {
        setPokemonDetail(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [pokemon]);

  const callonShowClick = () => {
    onShowClick(pokemon.url);
  };

  return (
    <Paper className={classes.item}>
      {!!pokemonDetail && (
        <>
          <Grid container className={classes.gridContainer} spacing={1}>
            <Grid item className={classes.itemImage} xs={12}>
              <img src={pokemonDetail.sprites.front_shiny} alt="pokemon" />
            </Grid>
          </Grid>
          <Grid container className={classes.gridContainer} spacing={1}>
            <Grid item className={classes.itemName} xs={12}>
              <Typography variant="subtitle1" onClick={callonShowClick}>
                {pokemonDetail.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.gridContainer} spacing={1}>
            {!!pokemonDetail.types &&
              pokemonDetail.types.map(({ type }) => (
                <Grid
                  item
                  key={type.name}
                  className={classes.itemName}
                  xs={12}
                  md={6}
                >
                  <div
                    className={classes.itemPower}
                    style={{ backgroundColor: choseColor(type.name) }}
                  >
                    <Typography variant="subtitle2">{type.name}</Typography>
                  </div>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </Paper>
  );
}
