import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './min.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    zIndex :2
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>

        <Typography gutterBottom variant="h7" component="h4" className="Bar">
        {props.text}

        </Typography>

        <Typography variant="body2" component="p" className="Bar">

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={"https://www.expedia.com.sg/things-to-do/search?location="+props.text} style={{color: "blue"}} target="_blank">Explore More</Button>
      </CardActions>
    </Card>
  );
}
