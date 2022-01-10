// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React, { Component } from "react";
import PropTypes from "prop-types";

// Material-UI components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { CardActionArea } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = () => ({
  card: {
    height: "auto",
    width: "fit-content",
  },
  cardMedia: {
    border: "4px solid #fff",
  },
  content: {
    textAlign: "center",
  },
});

class ImageCard extends Component {
  render() {
    const { poster, title, year, classes, imdbID } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.card} elevation={17} key={imdbID}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                title={title}
                image={poster}
                className={classes.cardMedia}
              />
              <CardContent className={classes.content}>
                <Typography component="h6" gutterBottom>
                  <b>{title}</b>
                </Typography>
                <Typography component="p">{year}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </React.Fragment>
    );
  }
}

// ------------------------------------------------------------------------------------------- //

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imdbID: PropTypes.string,
  error: PropTypes.string,
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default withStyles(styles)(ImageCard);