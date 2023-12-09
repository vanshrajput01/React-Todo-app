import './Todo.css'
import { useState } from 'react'

function Todo(props) {

    const [inputText, setInputText] = useState("");



    return (
        <div>
            <div className='Todo-input-containter'>
                <button className='input-container-btn' onClick={() => {
                    props.num
                    props.addList(inputText)
                    setInputText("")

                }}>
                    Add
                </button>
                <input className="Todo-input-feild" type="text" value={inputText} onChange={e => {
                    setInputText(e.target.value)
                }} />


            </div>
        </div>
    )

}

export default Todo