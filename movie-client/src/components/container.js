// --------------------------------------- Imports ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

import React, { Component } from "react";
import { withFormik } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames";

// Material-UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

// React components
import TextInputField from "./textInputField";
import DisplayMovies from "./displayMovies";


const styles = (theme) => ({
  appBar: {
    backgroundColor: "#2e111a",
    height: "3.5em",
    [theme.breakpoints.up(599)]: {
      height: "3.7em",
    },
  },
  lowerAppBar: {
    backgroundColor: "#2e111a",
  },

  lowerAppBarToolBar: {
    justifyContent: "right",
  },
  gridContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#c2c8e647",
  },

  links: {
    color: "#000",
  },
  titleFont: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
    },
  },
  titleColor: {
    color: "#fff",
  },
});

// ------------------------------------------------------------------------------------------- //

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedValue: "",
    };
    this.passSetValueToQuery = this.passSetValueToQuery.bind(this);
  }


   keyPress=(e)=>{
      if(e.keyCode == 13){
         console.log('value', e.target.value);
         // put the login here
      }
   }



  passSetValueToQuery = () => {
    const { values } = this.props;
    this.setState({
      submittedValue: values.search,
    });
  };

  render() {
    const { values, classes, handleChange, isSubmitting } = this.props;
    const { submittedValue } = this.state;
    return (
      <React.Fragment>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {/* Search field */}
            <TextInputField
              values={values.search}
              handleChange={handleChange}
              submittedValue={() => this.passSetValueToQuery()}
              isSubmitting={isSubmitting || !values.search}
              onKeyDown={this.keyPress}
            />
          </Toolbar>
        </AppBar>
        <AppBar
          position="static"
          className={classNames(
            classes.lowerAppBar,
            classes.lowerAppBarBackground
          )}
        >
          <Toolbar
            className={classNames(
              classes.lowerAppBarToolBar,
              classes.titleFont
            )}
          >
            <Typography variant="h4" className={classes.titleColor}>
              <b>Moviio</b>
            </Typography>
            <Typography variant="subtitle1" className={classes.titleColor}>
              Search movies and shows
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container className={classes.gridContainer}>
          <DisplayMovies singleTitle={submittedValue} />
        </Grid>
      </React.Fragment>
    );
  }
}

let SearchField = withFormik({
  mapPropsToValues({ values }) {
    return {
      search: values || "",
    };
  },
})(Container);

// ------------------------------------------------------------------------------------------- //

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

SearchField = withStyles(styles)(SearchField);

export default SearchField;

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //
