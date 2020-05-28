import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PokemonItem from "./Item";
import axios from "axios";
import useStyles from "../styles";

export default function PokemonList({ onShowClick }) {
  const classes = useStyles();
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(12);

  const loadMore = () => {
    axios
      .get(`http://pokeapi.salestock.net/api/v2/pokemon/?limit=${count + 12}`)
      .then(function (response) {
        setPokemons(response.data.results);
        setCount(count + 12);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://pokeapi.salestock.net/api/v2/pokemon/?limit=${count}`)
      .then(function (response) {
        setPokemons(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.grid}>
      <Grid
        container
        className={classes.gridContainer}
        alignItems="center"
        spacing={3}
      >
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <Grid
              key={pokemon.name}
              item
              className={classes.gridItem}
              xs={12}
              sm={6}
              md={4}
            >
              <PokemonItem pokemon={pokemon} onShowClick={onShowClick} />
            </Grid>
          ))}
        <Grid item className={classes.buttonBlock} xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={loadMore}
          >
            Load More
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
