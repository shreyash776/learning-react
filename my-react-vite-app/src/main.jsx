import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 
  const date = new Date();
  const time = date.getHours();
  let greeting;
  const customStyle ={
    color:""
  }

 if(time < 12){
    greeting ="Good Morning";
    customStyle.color="yellow";
 }
 else if(time<18){
    greeting="Good Afternoon";
    custonStyle.color="green";

 }
 else{
    greeting="Good Night";
    customStyle.color="red";
 }
ReactDOM.createRoot(document.getElementById('root')).render(
 <div>
 <h1 style={customStyle}   >{greeting}</h1>
 </div>
)
 