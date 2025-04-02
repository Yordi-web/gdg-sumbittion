import React from 'react'
import {createContext} from "react";
import {useState, createContext} from "react"; 
export default function ThemeContext() {
  return (
    <div>ThemeContext</div>
  )
}
export function ThemeProvider({children}){
    const[theme, setTheme]= useState('light');
    return(
   <div>
    <p>Current Theme:{theme}</p>
    <button onClick={() => setTheme(theme==='light' ? 'dark': 'light')}></button>
   </div>       
    );
}
