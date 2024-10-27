
//this is like a context api in which I will store the style and wherever I want it I will take it with its prop

function Container ({childern}) {
    //childern is a prop here

    return <div className="w-full max-w-7xl mx-auto px-4">{childern}</div>;

    //we can return this div directly in a same line if its a single line code
}

export default Container