import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: 300,
    gridTemplateRows: "350px 60px",
    gridTemplateAreas: "'image''text'",
    margin: "10px",
    color: "white",
    backgroundColor: "#1E2328",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0696AA",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateRows: "250px 50px",
      gridTemplateColumns: 150,
    },
  },
  media: {
    gridArea: "image",
    backgroundPosition: "top",
    transition: "0.3s ease-in-out",
    transform: "scale(1.1)",
    "&:hover": {
      transform: "scale(1)",
    },
  },
}));

export default useStyles;
