import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(3, 2),
    margin: "0 auto",
    textAlign: "center",
    width: "30%",
  },
  grid: {
    flexGrow: 1,
    margin: theme.spacing(3),
  },
  item: {
    padding: theme.spacing(2, 2),
    cursor: "pointer",
  },
  itemImage: {
    textAlign: "center",
  },
  itemName: {
    textAlign: "center",
  },
  itemPower: {
    borderRadius: "4px",
  },
  tableBlock: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  details: {
    padding: theme.spacing(2, 2),
    display: "block",
  },
  none: {
    display: "none",
  },
  buttonBlock: {
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
