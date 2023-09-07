import React from 'react';
import TextComponent from './components/TextComponent';
import ImageComponent from './components/ImageComponent';
import ButtonComponent from './components/ButtonComponent';


const jsonConfig = 
[
  { "type": "text",
    "content": "Hey fella! Meet my pet cat Ziry!" 
  },

  { "type": "image", 
    "src": "/cocomo.jpeg", 
    "alt": "My pet cat Ziry" 
  },
  { "type": "button", 
    "label": "Mark as done", 
    "action": "Done!!" 
  }
];


export default function App() {
  const renderedComponents = jsonConfig.map((config, index) => {
    switch (config.type) {
      case 'text':
        return <TextComponent key={index} content={config.content}  />;
      case 'image':
        return <ImageComponent key={index} src={config.src} alt={config.alt} className="imageComponent"/>;
      case 'button':
        return <ButtonComponent key={index} label={config.label} action={config.action} className="buttonComponent" />;
      default:
        return null; 
    }
  });

  return <div>{renderedComponents}</div>;
}
