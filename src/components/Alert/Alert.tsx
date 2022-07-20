import React, { useEffect, useState } from 'react';
import "./Alert.scss";

const Alert = ({ message, type, link=null }: { message: string, type: string, link: (string|null)}) => {
  const [display, setDisplay] = useState("show");
  

  const getAlertTheme = (type:string)=>{
    const backgroundColor= "#272727";
    let color = "white";
    switch (type) {
    case "info":
      color = "#A8BFFF"
      break;
    case "success":
    color = "#2EFCA8"
      break;
    case "error":
      color = "#FF4134"
      break;
    case "warning":
      color = "#E8A3FF"
      break;
    default:
      break;
  }
  return {color, backgroundColor, border: `3px solid ${color}`};
  }

const properties = {
    style:{
      ...getAlertTheme(type)
    },
    duration: 5000 //milliseconds
  }

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setDisplay("hide");
  //   },  properties.duration);
  // })

  return (
    <div className='feedback-container'>
    <div className={`alert-container ${display}`} style={{...properties.style}}>
      <span className='alert-message'>{message}. {link&&(<a href={link}>{link}</a>)}</span>
    </div>
  </div>);
}

export default Alert;