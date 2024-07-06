import React from "react";

import "./Input.css";

const Input = ({ label, ...props }) => {
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        {...props}
      />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} {...props} />
    );

  return (
    <div className={`form-control ${props.className}`}>
      <label htmlFor={props.id}>{label}</label>
      {element}
    </div>
  );
};

export default Input;
