import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import useStyles from "../styles";

export default function PokemonDetails({ showUrl }) {
  const classes = useStyles();
  const [detailRows, setDetailRows] = useState([]);
  const [name, setName] = useState([]);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (showUrl !== "") {
      axios
        .get(showUrl)
        .then(function (response) {
          let rows = response.data.stats.map(({ stat, base_stat }) => ({
            name: stat.name,
            value: base_stat,
          }));
          rows.push({ name: "weight", value: response.data.weight });
          setDetailRows(rows);
          setName(response.data.name);
          setImgUrl(response.data.sprites.front_shiny);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else return;
  }, [showUrl]);

  return (
    <Paper className={detailRows.length > 0 ? classes.details : classes.none}>
      {detailRows.length > 0 && (
        <>
          <Grid container className={classes.gridContainer} spacing={1}>
            <Grid item className={classes.itemImage} xs={12}>
              <img src={imgUrl} alt="pokemon" />
            </Grid>
          </Grid>

          <Grid container className={classes.gridContainer} spacing={1}>
            <Grid item className={classes.itemName} xs={12}>
              <Typography variant="subtitle1">{name}</Typography>
            </Grid>
          </Grid>
          <div className={classes.tableBlock}>
            <Table className={classes.table}>
              <TableBody>
                {detailRows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </Paper>
  );
}
