import "../../task-styles/taskcardstyle.css";
import {useContext} from 'react'
import {MainContext} from '../../contexts/MainContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'

function TaskCard({task}) {
  const {deleteTask, toggleTask, isDark} = useContext(MainContext)

  return (
    <div className={`${isDark ? "task_card task_card_dark" : "task_card"} ${task.completed ? "completed_card" : ""}`}>
      
      <button onClick={() => deleteTask(task.id)} className="delete_button">
        <FontAwesomeIcon icon={faX} />
      </button>

      <h1 className={`task_card_title ${task.completed ? "completed_text" : ""}`}>
        {task.title}
      </h1>
      <p className={`task_card_description ${task.completed ? "completed_text" : ""}`}>
        {task.description}
      </p>

      <div className="task_card_actions">
        <button onClick={() => toggleTask(task.id)} className="complete_button">
          {task.completed ? "Desmarcar" : "Completar"}
        </button>
      </div>
    </div>
  )
}

export default TaskCard