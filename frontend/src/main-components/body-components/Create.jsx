import '../../main-styles/createstyle.css'
import {useContext} from 'react'
import {MainContext} from '../../contexts/MainContext'
import { useNavigate } from "react-router-dom";

function Create() {
  const {isDark}= useContext(MainContext)
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/tasks"); 
  };
  return (
    <div className={isDark?"create_container dark_container":"create_container"} id='create'>
            <div className={isDark?"text_create_container text_create_container_dark":"text_create_container"}>
                <h2 className='create_text'>Create multiple tasks from this page</h2>
                <button className={isDark?"create_button create_button_dark":"create_button"} onClick={handleCreateClick}>Create Task</button>
            </div>
    </div>
  )
}

export default Create