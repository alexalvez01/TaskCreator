import "../../task-styles/formstyle.css";
import { MainContext } from "../../contexts/MainContext";
import { useContext } from "react";
import {useState} from 'react'

function TaskForm({ close }) {
  const {createTask, isDark} = useContext(MainContext);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [deadline, setDeadline] = useState("")
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      setErrorMsg("Please, fill all the spaces.");
      return;
    }

    createTask({
      title,
      description,
      deadline
    });
    
    setTitle("");
    setDescription("");
    setDeadline("");
    setErrorMsg("");
    close();
  };

  return (
    <div className={isDark ? "task_form_modal dark" : "task_form_modal"}>
      <div className="form_header">
        <h2>New Task</h2>
        <button className="close_btn" onClick={close}>&times;</button>
      </div>
      
      <form onSubmit={handleSubmit} className="task_form_content">
        <div className="input_group">
          <label>TITLE</label>
          <input
            placeholder="What needs to be done?"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="task_input"
            autoFocus
          />
        </div>

        <div className="input_group">
          <label>DESCRIPTION</label>
          <textarea
            placeholder="Add some details..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="task_input"
          ></textarea>
        </div>

        <div className="input_group">
          <label>DEADLINE</label>
          <input
            type="date"
            onChange={(e) => setDeadline(e.target.value)}
            value={deadline}
            className="task_input"
          />
        </div>

        {errorMsg && (
          <p className="error_msg">{errorMsg}</p>
        )}

        <div className="form_actions">
          <button type="button" className="cancel_btn" onClick={close}>Discard</button>
          <button type="submit" className="save_button">Create Task</button>
        </div>
      </form>
    </div>
  );
}
export default TaskForm;
