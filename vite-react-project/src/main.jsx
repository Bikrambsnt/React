import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//Am creating my own custom function here
function Message(){
return(
  <div>
    <h1>This is my custom function</h1>
  </div>
)

}

// Now the question is that if react converts everything on a tree structure then can we create a object and run it?
// Example

const ReactElement = {
  type: "a",
  props: {
    /* Here props define as a property of a tag*/ 
    href: "https://google.com",
    target: "blank",

  },
  Children: "click me" /* This are the termonologies on react  */,
  // now we need to create a method which can render this elements.which means which can add this element to the root id to display it in a browser
};
// but it wont work

// But if I do something like this then it will work 
const link=(

<a href='https://google.com' target='_blank'>click me</a>
)

// SO if I want to create a tree structure element then I have to follow certain rule of react

// To create element I have to use react create element

const newReactElement= React.createElement( /*This will get inject to our code everytime we run the react and babble is responsible to inject it */
// Now this will expect 3 parameters
// first one is any  tag  either h1,a anyting
// second one is a object
// third one is a pure text 
// example
 'a',
 {
  href:'https://google.com',
  target:'_blank'
 },
 'Click me to visit'
// Thats it
)



createRoot(document.getElementById('root')).render(
// so Here I have created a component and called it
  // <Message/>
  // Message() It can call like this also because its just  a js function

  // calling object
//  ReactElement;

// Now this will work
// link

newReactElement

)

// The reason is that when we are trying to execute our custom object then it has a custom key which is created by ourself and it will not match with the render component which is created by the react in simple word our syntax is not correct to create a tree structure
// the a tag runs because react will create its tree structure and it will define its key also


// Now lets learn how we can inject variables on our code example on  App.js file 