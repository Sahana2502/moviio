import React from "react";

// Material-UI components
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";


const styles = () => ({
  textField: {
    width: "50%",
    backgroundColor: "#fff",
    margin: "0",
    height: "3.5em",
  },

  form: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

let TextInputField = (props) => {
  const { values, classes, handleChange, submittedValue, isSubmitting } = props;
  return (
    <React.Fragment>
      <TextField
        className={classes.textField}
        id="search"
        type="search"
        variant="filled"
        name="search"
        placeholder="Movie title"
        value={values}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                type="submit"
                onClick={submittedValue}
                disabled={isSubmitting}
              >
                <SearchIcon aria-label="Submit form" />
              </IconButton>
            </InputAdornment>
          ),
          classes: {
            input: classes.input,
          },
        }}
      />
    </React.Fragment>
  );
};

TextInputField = withStyles(styles)(TextInputField);

export default TextInputField;
