import React from "react";

const Button = (props) => {
  return (
      <button type="button" onClick={props.onClick} className="btn btn-info btn-lg mx-auto">{props.context}</button>
  );
};

export default Button;