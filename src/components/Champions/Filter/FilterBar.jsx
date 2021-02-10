import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Typography, Toolbar } from "@material-ui/core";
import useStyles from "./FilterBarStyles";
import { getChamps, filterChamps, filterByName } from "./../../../redux/champions-reducer";
import { connect } from "react-redux";
import { useState } from "react";

const FilterBar = props => {
  const classes = useStyles();
  const [tagName, setTagName] = useState("All");

  return (
    <Toolbar className={classes.filterContainer}>
      <Autocomplete
        id='combo-box-demo'
        options={props.options}
        style={{ width: 300 }}
        onChange={(e, v) => props.filterByName(v)}
        renderInput={params => <TextField {...params} label='Search' variant='outlined' />}
      />
      <Typography className={tagName === "All" ? classes.active : classes.item} variant='h6'>
        <span
          onClick={() => {
            props.getChamps();
            setTagName("All");
          }}>
          All
        </span>
      </Typography>

      {props.tags.map(tag => {
        return (
          <Typography className={tagName !== tag ? classes.item : classes.active} variant='h6' key={tag}>
            <span
              onClick={() => {
                props.filterChamps(tag);
                setTagName(tag);
              }}>
              {tag}
            </span>
          </Typography>
        );
      })}
    </Toolbar>
  );
};
export default connect(null, { getChamps, filterChamps, filterByName })(FilterBar);
