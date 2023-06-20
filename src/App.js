import React,{useState} from "react";
import "./style.css";

export default function App() {
  const[value,setValue] = useState()
  const [todo, setTodo] = useState([])
  const [todoEditing, setTodoEditing] = useState(null)
  const[editingText, setEditingText] = useState("")

  function handleinputchange(e){
    setValue(e.target.value)
  }
  function handleinput(){
    if(value != '' && todo !== ''){
      setTodo([...todo,  value]);
      setValue('')
      

    }
  };
  function handleDelete(index){
    let new1 = [...todo]
    new1.splice(index , 1)
    setTodo([...new1])
  }
 
  function editTodo(index){
    const updatedTodos = [...todo];
    updatedTodos[index] = editingText;
    setTodo(updatedTodos);
    setTodoEditing(null);
    setEditingText("");

  }
  
//   const markTodo = index => {
//     const newTodos = [...todo];
//     newTodos[index].isDone = true;
//     setTodo(newTodos);
// };

  return (
    <div>
    enter your name <input 
    value = {value} 

    onChange = {handleinputchange} />
     <button onClick = {handleinput}>Add list</button>
     
    
     <div>
       {
         todo.map((todos,index) =>  <div key={index}>
         {
           todoEditing === index ? (<input 
            type="text"
            onChange={(e) => setEditingText(e.target.value)} 
            value={editingText}
            />) : ( <p style={{ textDecoration: todo.isDone ? "line-through" : "" }}> {todos} </p>)}
      
      <button onClick={() => markTodo(index)}>✓</button>
          
           <button onClick={() => handleDelete(index)}> Delete </button>

           {
             todoEditing === index ? (
              <button onClick={() => editTodo(index)}> Submit Edits</button>
             ) : (
             <button onClick={() => setTodoEditing(index)}>Edit Todo</button>
             )
           }
          
          
          
          </div>
         
          )
          

       }

     
 

       </div>
    </div>
  );
}
