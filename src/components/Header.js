import React from "react";
import Button from "./Button";
import {useState} from 'react'
const Header = ({ title, onAddTask }) => {
    const [isVisible,setVisible]=useState(false)
  const onclick = () => {
       
    setVisible(!isVisible)

    onAddTask(()=>isVisible)
    
  };  

  const task = {
    id: 4,
    text: "go to office",
    day: "Feb 5th 1:00pm",
    reminder: true,
  };

  return (
    <header className="header">
      <h1>{title}</h1>
     
      <Button onclick={onclick} title={isVisible?'Add':'Close'} color={isVisible?'green':'red'} />
    </header>
  );
};

export default Header;
