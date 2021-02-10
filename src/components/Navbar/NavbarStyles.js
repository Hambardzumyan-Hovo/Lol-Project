import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#1E2328",
  },
  title: {
    margin: "auto",
    padding: "5px",
    cursor: "pointer",
    position: "relative",
    "&:hover": { borderBottom: "3px solid #0696AA" },
  },
  logo: {
    width: 64,
    height: 64,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  active: { color: "#0696AA" },
}));

export default useStyles;
