
// Here we are using jsx file name because jsx is used for components and js is 


// Always remrmber that component first name letter (which means a function name) should always be in a capital letter like (function Name (){})

function Something (){ 
    // Here I am creating the new function

    return(
// here I am returning the h1 message

// now here we cannot add another tag without wrapping it on a single fragment

        // <h1>This is a New message</h1>
        // <h2>This is a another message </h2>
        // this is not possible to do 
        // fragment can be div or a <>

        <>
        <h1>This is a New message</h1>
       <h2>This is a another message </h2>
        </>

    );

}
export default Something;
// here I am expoting that function
// now after exporting I have to import  it also
