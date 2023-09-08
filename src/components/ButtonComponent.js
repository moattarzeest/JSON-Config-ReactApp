import React from "react";

export default (props) => (
   <button className="button" onClick={()=>alert(props.config.action)}>{props.config.label}</button>
);
