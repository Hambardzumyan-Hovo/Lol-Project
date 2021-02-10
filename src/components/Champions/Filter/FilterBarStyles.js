import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateRows: "250px 50px",
      gridTemplateColumns: 150,
      flexDirection: "column",
    },
  },

  item: {
    margin: "10px",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "2px solid #0696AA",
    },
  },
  active: {
    borderBottom: "2px solid #0696AA",
    margin: "10px",
    cursor: "pointer",
  },
}));

export default useStyles;
