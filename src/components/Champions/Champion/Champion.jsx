import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./ChampionStyles";
import { useState } from "react";
import { Fade } from "@material-ui/core";

const Champion = props => {
  const classes = useStyles();
  const [state] = useState(true);
  return (
    <Fade in={state}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.id}_0.jpg`}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.name}
          </Typography>
        </CardContent>
      </Card>
    </Fade>
  );
};

export default Champion;
