import React from "react";

function BmiDescription(props) {
  return <p className={props.data.class}>{props.data.title}</p>;
}

export default BmiDescription;
