import React from 'react';
import classes from "./Todo.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ task, onUpdateTask, onDeleteTask }) => {
    const handleEdit = () => {
        const edited = prompt("Edit task:", task.task)
        if (edited !== null) {
            onUpdateTask({ ...task, task: edited });
        }
    };

    const handleToggleComplete = () => {
        // Toggle task completion status
        onUpdateTask({ ...task, completed: !task.completed });
    };

    const handleDelete = () => {
        onDeleteTask(task.id);
    };

    return (
        <div className={classes.todo}>
            <p onClick={handleToggleComplete} className={`${classes.task} ${task.completed ? classes.completed : ''}`}>{task.task}</p>
            <div className={classes.edits}>
                <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit}/>
                <FontAwesomeIcon icon={faTrash} onClick={handleDelete}/> 
            </div>
        </div>  
    );
}

export default Todo;
