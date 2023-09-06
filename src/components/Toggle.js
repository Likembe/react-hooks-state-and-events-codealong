import React from "react";
import { useState } from "react";

function Toggle() {
  const[isOn, setIsOn]= useState(true);

  function handleClick(){
    setIsOn((isOn) => !isOn);
  }

  return (
  
  <button 
  style={{
    background: isOn ? "red" : "white",
    color: isOn ? "white" : "black",
  }} 
    onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
  
  </button>

  )
}

export default Toggle;
