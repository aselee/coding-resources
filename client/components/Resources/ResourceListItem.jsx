import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Paper, Button, Chip } from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';

import './ResourceListItem.scss';

const ResourceListItem = ({ id, url, title, tags, votes }) => (
  <Grid>
    <Paper className="main">
      <div>
        <h2>
          <Link to={`/resources/${id}`} className="site">
            {title}
          </Link>
        </h2>
      </div>
      <div>
        test2
        <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </div>
      <div>
        test3
        {tags.map(tag => (
          <Chip
            key={tag}
            className="tag"
            label={tag}
          />
        ))}
        test4
      </div>
      <Button className="linkVotes" variant="contained">
        Upvote: <ThumbUp style={{ margin: '0 10px' }} />
        {votes}
      </Button>
    </Paper>
  </Grid>
);

ResourceListItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array,
  votes: PropTypes.number,
};

export default ResourceListItem;
