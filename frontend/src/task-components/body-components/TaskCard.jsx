import "../../task-styles/taskcardstyle.css";
import {useContext} from 'react'
import {MainContext} from '../../contexts/MainContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'

function TaskCard({task}) {
  const {deleteTask, toggleTask, isDark} = useContext(MainContext)

  const formatDeadline = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
  };

  const deadline = formatDeadline(task.deadline);

  return (
    <div className={`${isDark ? "task_card dark" : "task_card"} ${task.completed ? "completed" : ""}`}>
      <div className="card_header">
        <div className={`status_indicator ${task.completed ? "completed" : "pending"}`}></div>
        {deadline && (
          <div className="deadline_badge">
            {deadline}
          </div>
        )}
        <button onClick={() => deleteTask(task.id)} className="delete_btn" title="Delete Task">
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>

      <div className="card_body">
        <h3 className="task_title">{task.title}</h3>
        <p className="task_desc">{task.description}</p>
      </div>

      <div className="card_footer">
        <button 
          onClick={() => toggleTask(task.id)} 
          className={task.completed ? "btn_uncomplete" : "btn_complete"}
        >
          {task.completed ? "Mark as Pending" : "Mark as Done"}
        </button>
      </div>
    </div>
  )
}

export default TaskCard