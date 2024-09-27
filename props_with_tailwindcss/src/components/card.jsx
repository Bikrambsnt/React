import React from 'react';

// probs will be passed inside the function like
// react will call it as a probs by default

// now instead of passing probs I can directly pass the name of element that I want to change like username,paragraph


// function Card(probs){ 
//     console.log('Probs' ,probs) /* This will gave me an empty object inside which I can add anything like array,string,object anything*/
    // to access this prob I will call it on inside where component has been called component

    // better I can do
    function Card ({heading="sunset",paragraph}){ /*Here sunset is declare as a default value */
        // we can pass default value also to props like if we failed to declare on html then it will set that default value 
        // like heading ="Sunset"
    
    return(
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
  <img className="w-full" src="https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{heading}</div> {/*Now if I want to change the name of this line I can inject that probs here */}
    <p className="text-gray-700 text-base">
      {paragraph}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
        </>
    )
}

export default Card;