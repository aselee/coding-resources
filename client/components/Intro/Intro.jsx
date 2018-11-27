import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import './Intro.scss';
import image from './image.jpg';

// Adding styles
// no changes, still same issue
// content is not being responsive

const styles = theme => ({
  card: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  media: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const intro = (props) => {
  const { classes } = props;

  return (
    <div className={classes.card}>
      <Paper elevation={8}>
        <img src={image} alt="pic" className={classes.media} />
        <Typography variant="h5" align="center">
          Welcome to the Programming Reference Site
        </Typography>
        <Divider />
        <br />
        <Typography variant="subtitle1" className={classes.content}>
            This project was created to help individual programmers, ranging from begginer to advanced, to have a reference site, where specific links; githubs, articles, etc. are listed and recommended by programmers such as yourself!
            We understand the importance of using a search engine, but we also understand that there are so many resources out there, sometimes you don‘t know whether something worth your while or not!
            This website was created to help the individual programmers to find the best sources that are backed up by other programmers, who have looked into the references themselves!
            Please feel free to add any input on this ongoing project! We would love to hear your insight and improve the site!
        </Typography>
      </Paper>
    </div>
  );
};

intro.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(intro);
