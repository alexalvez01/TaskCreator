import TaskForm from './body-components/TaskForm'
import TaskList from './body-components/TaskList'
import Header from '../main-components/Header'
import  '../task-styles/bodystyle.css'
import  '../task-styles/taskheaderstyle.css'
import { useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext"
import { useContext, useState } from "react"

function TaskBody() {
  const navigate = useNavigate();
  const {isDark}=useContext(MainContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={isDark?"task_main task_main_dark":"task_main"}>
    <Header />
    <div className="task_view_container">
      <div className="task_controls_header">
        <h1 className="task_view_title">Your Tasks</h1>
        <button 
          className="add_task_btn_primary"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="plus_icon">+</span> Create Task
        </button>
      </div>

      {isModalOpen && (
        <div className="modern_modal_overlay" onClick={() => setIsModalOpen(false)}>
          <div className={`modern_modal_content ${isDark ? 'dark' : ''}`} onClick={(e) => e.stopPropagation()}>
            <TaskForm close={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}

      <TaskList />
    </div>

    </main>
  )
}

export default TaskBody