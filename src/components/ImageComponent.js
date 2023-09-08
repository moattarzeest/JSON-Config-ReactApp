import React from "react";

const imageComponents = (props) => (
    <img className="image" src={props.config.src} alt={props.config.alt} ></img>
);

export default imageComponents;
