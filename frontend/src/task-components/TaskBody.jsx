import TaskForm from './body-components/TaskForm'
import TaskList from './body-components/TaskList'
import Header from '../main-components/Header'
import  '../task-styles/bodystyle.css'
import  '../task-styles/taskheaderstyle.css'
import { MainContext } from "../contexts/MainContext"
import { useContext } from "react"

function TaskBody() {
  const {isDark}=useContext(MainContext)
  return (
    <main className={isDark?"task_main task_main_dark":"task_main"}>
    <div className="task_header_container">
      <Header />
    </div>
    <TaskForm/>
    <TaskList/>

    </main>
  )
}

export default TaskBody