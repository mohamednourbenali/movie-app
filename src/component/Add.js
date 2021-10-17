import {useState} from 'react'

const Add=({addTask})=> {
    const[newTask,setNewTask]=useState();
    const[newDone,setNewDone]=useState(false);
    const handleAdd=()=>{
        let newTasks={
            task : newTask,
            done : newDone,
            id : Math.floor(Math.random() * 100)
        }
        addTask(newTasks);
        setNewTask('');
        setNewDone(false);
    }
    return(<div>
        <input type="text" placeholder="add new movie..." value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <button onClick={handleAdd} >ADD</button>
    </div>);
}
export default Add;