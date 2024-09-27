import Something from "./new"
// here I am importing that function

function App() {
// Here I will define the variable to inject 

const username="Bikram";



// Here also lets try to return more tags wrapping on a single element
  return (
    <>
 <Something/>
 <p>Returninig from App.jxs file</p>
     
 <p>Injecting  variable {username} </p>  {/* Now if I want to pass the variable here then I'll use {}  */}

{/* SO when we add a variable inside the tag then that is called as a expression ,evaluated expression 
which means we only write the final outcome of js not the whole js. which means we cannot write like this
{if username=''  username or any kind of loop} this is not acceptable to write we have to write it before the return statement 

the reason is that when rendering react will place the variable as it is in a tree structure at the last after creating the tree

example 

const newReactElement= React.createElement(
 'a',
 {
  href:'https://google.com',
  target:'_blank'
 },
 'Click me to visit'
  username 
)

like this 


like it is converting everything on a object so inside an object we cannot use loopd, conditiond thats the basic concept
{
for()

if()
} this wont happens inside and object

*/}
 </>
  )
}

export default App


