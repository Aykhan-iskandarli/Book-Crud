import React from "react";

const Button = ({ className, children, style, onClick, type, disabled }) => {
  return (
    <button
      className={`btn ${className}`}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
