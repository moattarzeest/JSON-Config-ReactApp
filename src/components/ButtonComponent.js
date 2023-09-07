import React from "react";

const ButtonComponent = ({ label, action }) => {
  return <button onClick={() => alert(action)} className="buttonComponent">{label}</button>;
};

export default ButtonComponent;
