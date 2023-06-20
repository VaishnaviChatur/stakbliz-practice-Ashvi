import React,{useState} from "react";
import "./style.css";

export default function App() {
  //to get value 
  const[value,setValue] = useState()
  //to store value
  const [todo, setTodo] = useState([])
  //taking two usestate for updete todo/edit todo
  const [todoEditing, setTodoEditing] = useState(null)//to use tarnary oerator to set button
  const[editingText, setEditingText] = useState("")

  function handleinputchange(e){
    setValue(e.target.value)
  }
  //for add todolist item
  function handleinput(){
    if(value != '' && todo !== ''){
      setTodo([...todo,  value]);
      setValue('')
      

    }
  };
  //for delete
  function handleDelete(index){
    let new1 = [...todo]
    new1.splice(index , 1)
    setTodo([...new1])
  }
 //to edit todolist 
  function editTodo(index){
    const updatedTodos = [...todo];
    updatedTodos[index] = editingText;
    setTodo(updatedTodos);
    setTodoEditing(null);
    setEditingText("");

  }
  


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
            />) : ( <p> {todos} </p>)}
      
      {/* <button onClick={() => markTodo(index)}>✓</button> */}
          
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
