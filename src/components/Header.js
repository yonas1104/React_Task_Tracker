import React from "react";
import Button from "./Button";
import {useState} from 'react'
const Header = ({ title, onAddTask ,isVisible}) => {
   





  return (
    <header className="header">
      <h1>{title}</h1>
     
      <Button onclick={onAddTask} title={isVisible?'Close':'Add'} color={isVisible?'red':'green'} />
    </header>
  );
};

export default Header;
