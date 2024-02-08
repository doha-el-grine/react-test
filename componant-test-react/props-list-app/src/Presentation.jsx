import React from "react";

function Presentation(props) {
  return (
    <div>
      <h1>Hello, {props.name} {props.last_name} you have deploma in {props.deploma}</h1>
    </div>
  );
}

export default Presentation;

