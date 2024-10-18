import AddTodos from "./components/AddTodos" 
import Todos from "./components/Todos"
import { Provider } from "react-redux"
import { store } from "./app/store"
//here we have to import the store which we have created in store file
function App() {


  return (
    <Provider store={store}> {/* Instead of vale we will pass store here*/}  
      <AddTodos/>
      <Todos/>
    </Provider>
  )
}

export default App
