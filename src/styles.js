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
  // gridContainer: {
  //   border: "2px solid red",
  // },
  // gridItem: {
  //   border: "2px solid blue",
  // },
  item: {
    padding: theme.spacing(2, 2),
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    marginBottom: theme.spacing(2),
  },
  itemName: {
    // border: "2px solid blue",
    textAlign: "center",
  },
  itemPower: {
    backgroundColor: "violet",
    borderRadius: "4px",
  },
}));

export default useStyles;
