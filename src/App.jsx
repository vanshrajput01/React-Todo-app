import Todo from "./Todo"
import './App.css'
import { useState } from "react"
import Card from "./Card"


function App() {
  const [listTodo, setListTodo] = useState([])



  const addList = (inputText) => {
    if(inputText  !== ""){
      setListTodo([...listTodo, inputText])

    }
    

  }

  const deleteListItem = (key) =>{
    let newListItem = [...listTodo]
    newListItem.splice(key,1)
    setListTodo([...newListItem])


  }


  return (
    <div>
      <div>
        <Todo addList={addList} />

        <div className="Card-container">
          {listTodo.map((listItem ,i) =>{
            return(
              <Card  key = {i}  index = {i} item={listItem} deleteItem = {deleteListItem}/>
            )
          })}


        </div>


      </div>
    </div>
  )
}

export default App
