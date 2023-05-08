import './App.css';
import {useState} from "react";

function App() {

    const [newItem,setNewItem]=useState("");
    const [items,setItems]=useState([]);

    const addItem=()=>{
        if(newItem==""){
            alert("enter an ıtem")
        }
        const item={
            id:Math.floor(Math.random()*1000),
            value:newItem
        }
        setItems(oldItems=> [...oldItems,item])
        setNewItem("")
    }

    const deleteItem = (id)=>{
        const newArray=items.filter(item=>item.id!==id);
        setItems(newArray)
    }


  return (
    <div className="App">
        <div className="todoApp">
            <h1 className="dailytodoapp">DAİLY TODO APP</h1>
            <input type="text"
                   placeholder="Add a new todo..."
                   onChange={e=> setNewItem(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
            <h5 className="input-items">
                {items.map(item=>{
                    return(
                        <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}>X</button></li>
                    )
                })}
            </h5>
        </div>

    </div>
  );
}

export default App;
