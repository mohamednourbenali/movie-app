import react from "react";
import Task from "./Task";

function DisplayTasks (props){
    return(<div>
        <ul>
        {props.TaskList.map(el=><li><Task el={el} setTaskList={props.setTaskList} TaskList={props.TaskList}/></li>)}
        </ul>
    </div>)
}
export default DisplayTasks;