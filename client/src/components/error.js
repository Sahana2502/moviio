
import React from "react";

const Error = (props) => {
  const { classes, singleTitle } = props;
  return (
    <span>
         Oops, it looks like <b>'{singleTitle}'</b> wasn't found
    </span>    
  );
};

export default Error;


