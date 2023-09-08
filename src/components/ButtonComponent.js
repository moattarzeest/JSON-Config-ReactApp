import React from "react";

const buttonComponents =  (props) => (
   <button className="button" onClick={()=>alert(props.config.action)}>{props.config.label}</button>
);

export default buttonComponents;
