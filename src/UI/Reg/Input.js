import React from "react";

function Input(props) {
  return (
    <div>
      <input
        className={props.className}
        type={props.type}
        value={props.value}
        placeholder={props.enter}
      />
    </div>
  );
}

export default Input;
