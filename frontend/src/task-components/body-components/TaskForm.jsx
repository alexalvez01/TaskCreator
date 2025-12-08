import "../../task-styles/formstyle.css";
import { MainContext } from "../../contexts/MainContext";
import { useContext } from "react";
import {useState} from 'react'

function TaskForm() {
  const {createTask} = useContext(MainContext);
  const {isDark}=useContext(MainContext)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
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
    });
    setTitle("");
    setDescription("");
    setErrorMsg("");
  };
   return (
    <div className="taskform_container">
      <form onSubmit={handleSubmit} className={isDark?"task_form task_form_dark":"task_form"}>
        <h2>Tasks</h2>

        <input
          placeholder="Write the task title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={isDark?"task_form_input task_form_input_dark":"task_form_input"}
        />
        <textarea
          placeholder="Write the task description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className={isDark?"task_form_input task_form_input_dark":"task_form_input"}
        ></textarea>
        {errorMsg && (
          <p style={{ color: "red", marginBottom: "10px", fontSize: "15px" }}>{errorMsg}</p>
        )}

        <button className={isDark?"save_button save_button_dark":"save_button"}>Save</button>
      </form>
    </div>
  );
}
export default TaskForm;
