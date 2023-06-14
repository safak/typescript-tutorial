"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const UseContextExample = () => {

  const {state,dispatch} = useContext(ThemeContext)

  console.log(state)
  return (
    <div className="useContextExample">
      <button onClick={()=>dispatch({type:"CHANGE_THEME"})}>Change Theme</button>
      <button onClick={()=>dispatch({type:"CHANGE_FONTSIZE", payload:20})}>Change Font Size</button>
    </div>
  );
};

export default UseContextExample;
