

//Context API is used to provide global access to others components like If I want to pass any things in cards or in any components then I can use context to provide it

//Creating context is simple  and context will be created on pure js file not jsx as it dont return any jsx elements

import React from 'react'

const Context = React.createContext() //This is how we can create a context


export default Context;



//Now how can we use this context 
//to use it we have to  create a provider which provides this context to the other components  by wrap the components with this context like wrapping jsx elements with fragments

{/* <Context >

<Card />
<User />

</Context> */}

//Like this we can use it



