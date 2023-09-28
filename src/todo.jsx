import { useState } from "react";

const Todo = () => {

    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState("")

    const addTodo = (todo) =>{
        const newTodo = {
            id: Math.random(),
            body: todo
        }
    
        //To add task to the array

        setList([...list, newTodo]);
        setInput('')  
    };

    const handleDelete = (id) =>{
        const newList = list.filter((todo)=> todo.id !==id)


        setList(newList)
    };
    
    return (
    <div className="body">
        <div className="input">
          <input type="text" 
           value={input}
           onChange={(e) => {
            const newValue = e.target.value
            const formatedValue = newValue.charAt(0).toUpperCase() + newValue.slice(1)
            setInput(formatedValue)
            }}
           placeholder="Input your todo..."
           /><br />
           <button onClick={() =>addTodo(input)} disabled= {input===""}>Add Todo</button>
        </div>
        <div className="display">
           <div className="list">
            <h3 className="h3">My Todo List</h3><hr />
           <ol>
                {list.map((todo) => (
                    <li key={todo.id}>
                       <p>{todo.body}</p>
                       <div className="delbtn"><button onClick={()=> handleDelete(todo.id)}  className="btn"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button></div>
                    </li>
                    ))}
            </ol>
           </div>
        </div>
    </div>
    );
}
 
export default Todo;