import React from "react";
import Renderer from "./RenderFunction";
const jsonConfig = [
  { component: "text", content: "Hey fellas! Meet my pet cat Ziry!" },
  { component: "image", src: "/cocomo.jpeg", alt: "My pet cat Ziry" },
  { component: "button", label: "Done", action: "Done!" }
];
export default function App() {
  const renderedComponents = jsonConfig.map((config) => Renderer(config));
  return <div>{renderedComponents}</div>;
}
