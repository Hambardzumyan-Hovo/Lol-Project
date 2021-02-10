import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
import useStyles from "./NavbarStyles";

function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <div>
            <NavLink to='/'>
              <img className={classes.logo} src={logo} alt='' />
            </NavLink>
          </div>
          <Typography variant='h5' className={classes.title}>
            <NavLink to='/champions' className={classes.link} activeClassName={classes.active}>
              Champions
            </NavLink>
          </Typography>

          <Typography variant='h5' className={classes.title}>
            <NavLink to='/players' className={classes.link} activeClassName={classes.active}>
              Players
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
