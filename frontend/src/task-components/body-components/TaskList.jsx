import "../../task-styles/liststyle.css";
import {MainContext} from '../../contexts/MainContext'
import {useContext} from "react"
import TaskCard from './TaskCard'

function TaskList() {
    const {isDark, tasks} = useContext(MainContext)
      
    if (tasks.length===0){
        return <h1 className='no_tasks'>No hay tareas</h1>
          }
      return ( 
        <div className="task_card_container">
          {tasks.map(task=>(
          <TaskCard key={task.id} task={task}/>
          ))}
        </div> )
}

export default TaskList