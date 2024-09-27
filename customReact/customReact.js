// In this I am trying to create own custom react by defining own function and elements

// defining the react element to check how react will return the html from a function, basically react return the html element in a try structure

const reactElement = {
  type: "a",
  props: {
    /* Here props define as a property of a tag*/ 
    href: "https://google.com",
    target: "blank",

  },
  Children: "click me" /* This are the termonologies on react  */,
  // now we need to create a method which can render this elements.which means which can add this element to the root id to display it in a browser
};

const container = document.querySelector("#root");

// here I will create a custom render method to reder that above elements.

customRender(reactElement,container) /* This render expect two parameters that is which element to
render and where to render it */

// Now after this we have to create a function which will tell this render how it will going to render that elements

// +++++++++++++++++++++++++

function customRender(element,container){ /* Here i am passing two element as a parameter*/
// now here we have to create a domelement

// const domElement=document.createElement(element.type)
// // here i am creating an dom element and am passing the type created above to check its type

// // Now we have to insert something in the created empty element

// domElement.innerHTML=reactElement.Children; /*Here we are taking child of the reactElement in innerHTML */
// domElement.setAttribute('href',reactElement.props.href);
// domElement.setAttribute('target',reactElement.props.target);
// container.appendChild(domElement);  /*Here I am injecting dom element to the render */

// Now this is the simple way to understand the basic but this code has a problem that what if I want to add more attributes so to fix this we will write a loope base code.

const domElement=document.createElement(element.type);

domElement.innerHTML=reactElement.Children;

// here I have use for in loop to iterate over the set attributes.
 for (prop in reactElement.props) {
   if(prop==='Childern')continue;
   
   domElement.setAttribute(prop, reactElement.props[prop])
   container.appendChild(domElement);
 }




}

// SO this is how react creates elements for each element and display it in the browser.

// Lets try this concept on vite react also



