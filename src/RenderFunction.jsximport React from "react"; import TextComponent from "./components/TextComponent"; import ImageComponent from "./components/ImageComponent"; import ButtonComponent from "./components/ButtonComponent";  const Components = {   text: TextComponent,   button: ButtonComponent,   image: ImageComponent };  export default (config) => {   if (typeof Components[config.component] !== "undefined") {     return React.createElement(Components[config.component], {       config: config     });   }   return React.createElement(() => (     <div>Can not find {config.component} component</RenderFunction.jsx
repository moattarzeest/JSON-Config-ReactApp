import React from "react";
import TextComponent from "./components/TextComponent";
import ImageComponent from "./components/ImageComponent";
import ButtonComponent from "./components/ButtonComponent";

const Components = {
  text: TextComponent,
  button: ButtonComponent,
  image: ImageComponent
};

export default (config) => {
  if (typeof Components[config.component] !== "undefined") {
    return React.createElement(Components[config.component], {
      config: config
    });
  }
  return React.createElement(() => (
    <div>Can not find {config.component} component</div>
  ));
};
