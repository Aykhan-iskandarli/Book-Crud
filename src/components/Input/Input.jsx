import React from "react";

const Input = ({ className, onChange, style, type, value, placeholder,name }) => {
  return (
    <input
      className={`input ${className}`}
      value={value}
      onChange={onChange}
      style={style}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
