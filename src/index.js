import React from "react";
import ReactDom from "react-dom";

const element = <h1>Hello World</h1>; //Babel will compile this JSX to JS.
console.log(element);

//Render : Using ReactDom , Syntax : ReactDOM.render(elementName,Place in RealDom)

ReactDom.render(element, document.getElementById("root"));
