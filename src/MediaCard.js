
import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {pins1, pinsHover1, pins2, pinsHover2, pins3, pinsHover3} from './pin.js';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {




    let style;
    if(props.set==="1")
    style = pinsHover1;
    else if(props.set==="2")
    style = pinsHover2;
    else
    style = pinsHover3;
    const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div style={style} ></div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.about}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );

}
