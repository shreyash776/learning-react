import React from "react"

function Head (){
    
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
    customStyle.color="green";

 }
 else{
    greeting="Good Night";
    customStyle.color="red";
 }

   return <h1 style={customStyle}> {greeting} </h1>;
 

}
 export default Head;