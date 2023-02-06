import React from "react";

import "./Icons.css";

function Icons(props) {
  // Check type of operator if it was Posotive or Negative to determine +/- operator
  // Check type of operator if it was UP or Down to determine up/down operator

  const checkOperator = () => {
    if (props.type === "top" && props.number >= 0) {
      return <i className="bi bi-caret-up-fill"></i>;
    } else if (props.type === "top" && props.number < 0) {
      return <i className="bi bi-caret-down-fill"></i>;
    } else if (props.type === "sign" && props.number >= 0) {
      return (
        <i style={{ color: "white" }} className="Global-icon">
          +
        </i>
      );
    } else
      return (
        <i style={{ color: "white" }} className="Global-icon">
          -
        </i>
      );
  };

  return <>{checkOperator()}</>;
}

export default Icons;
