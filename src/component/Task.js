import react from "react";
import Modify from './Modify'

function Task(props){
    const handleDelete=()=>{
       props.setTaskList(props.TaskList.filter(task=>task.id!==props.el.id));
    }
    const handleDone=()=>{
        let modifiedDone = (props.el.done)?false:true;
        let modifiedTask={
            task:props.el.task,
            done:modifiedDone,
            id:props.el.id
        }
        props.setTaskList({...props.TaskList.filter(task=>task.id!==props.el.id),modifiedTask});
       
    }
    return(<div className="task">
        <h1 style={{textDecoration:props.el.done?"line-through":"none"}}> {props.el.task}</h1>
        <h6>{props.el.id}</h6>
        <button onClick={handleDelete}>X</button>
        <Modify />
        
    </div>)
}
export default Task;