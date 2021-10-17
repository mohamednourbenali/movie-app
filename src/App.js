import react,{useState} from 'react';
import './App.css';
import {TaskList} from './component/TaskList'
import DisplayTask from './component/DisplayTasks'
import Add from './component/Add';

const App=()=> {
  const [taskList,setTaskList] = useState(TaskList);
  
  const addTask=(newTask)=>{
    return setTaskList([...taskList, newTask])
  }
  return (
    <div className="App">
      <div>
        <Add addTask={addTask}/>
      </div>
      
      <DisplayTask TaskList = {taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
