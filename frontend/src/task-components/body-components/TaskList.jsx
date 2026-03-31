import { useState, useContext } from "react";
import { MainContext } from '../../contexts/MainContext';
import TaskCard from './TaskCard';
import "../../task-styles/liststyle.css";

function TaskList() {
    const {isDark, tasks} = useContext(MainContext)
    const [filter, setFilter] = useState("all"); // all, pending, completed
    const [sortBy, setSortBy] = useState("closest"); // closest, farthest

    if (!tasks || tasks.length === 0) {
        return <h1 className='no_tasks'>No tasks found</h1>
    }

    // Filtering logic
    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
    });

    // Sorting logic
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (!a.deadline) return 1;
        if (!b.deadline) return -1;
        
        const dateA = new Date(a.deadline);
        const dateB = new Date(b.deadline);
        
        return sortBy === "closest" ? dateA - dateB : dateB - dateA;
    });

    return (
        <div className="task_list_wrapper">
            <div className={isDark ? "list_controls dark" : "list_controls"}>
                <div className="filter_group">
                    <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
                    <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>Pending</button>
                    <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Done</button>
                </div>
                
                <div className="sort_group">
                    <span className="sort_label">Deadline:</span>
                    <button 
                        className="sort_toggle_btn"
                        onClick={() => setSortBy(sortBy === "closest" ? "farthest" : "closest")}
                    >
                        {sortBy === "closest" ? "Soonest first ↓" : "Latest first ↑"}
                    </button>
                </div>
            </div>

            <div className="task_card_container">
                {sortedTasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    )
}

export default TaskList