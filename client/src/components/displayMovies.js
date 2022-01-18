// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React from "react";
import { RETRIEVE_SEARCH } from "../apolloclient/queries";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";

// Components
import ImageCard from "./imagecard";
import Error from "./error";

// Material-UI components
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// Images

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

const styles = () => ({
  errorContainer: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
});

const DisplayMovies = (props) => {
  const { singleTitle } = props;
  let movies;
  const { loading, error, data } = useQuery(RETRIEVE_SEARCH, {
    variables: { singleTitle: singleTitle ? singleTitle : "friends" },
  });

  //sorting movies in descending order of year of release
  if (data !== undefined && data.BySearch !== null) {
    movies = [...data.BySearch];
    movies.sort((movie1, movie2) => movie2.Year.localeCompare(movie1.Year));
  }

  if (loading) return "Loading...";
  if (error) return <Error />;
  if (movies == null) return <Error singleTitle={singleTitle} />;
  return movies.map((titles, i) => {
    return (
      <Grid item style={{ margin: "3em 1em" }} key={i}>
        <ImageCard
          key={titles.imdbID}
          title={titles.Title}
          poster={titles.Poster}
          year={titles.Year}
        />
      </Grid>
    );
  });
};
// ------------------------------------------------------------------------------------------- //

DisplayMovies.propTypes = {
  classes: PropTypes.object.isRequired,
  singleTitle: PropTypes.string.isRequired,
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

export default withStyles(styles)(DisplayMovies);

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //
