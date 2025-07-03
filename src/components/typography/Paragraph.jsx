import React, { Children } from "react";

const Paragraph = (props) => {
  return <div {...props}>{Children}</div>;
};

export default Paragraph;
