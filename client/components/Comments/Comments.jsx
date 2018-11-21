import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  card: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 20,
    marginRight: theme.spacing.unit * 20,
    height: 300,
  },
  textField: {
    flexBasis: 200,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  messageField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 450,
  },
})

const comments = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textPrimary">
              Leave a comment
            </Typography>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows="4"
                name="message"
                className={classes.messageField}
                margin="normal"
                variant="outlined"
              />
            </div>
          </CardContent>
        </Card>
      </CssBaseline>
    </React.Fragment>

  );
};

comments.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(comments);