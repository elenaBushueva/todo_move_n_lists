import React, {useState} from 'react';
import Board from "./Board";
import "bootstrap/dist/css/bootstrap.css"
import Controller from "./Controller";

const initialTasks = [
    {id: Math.random(), name: 'Task 1', priority: 1, status: 'todo'},
    {id: Math.random(), name: 'Task 2', priority: 2, status: 'todo'},
    {id: Math.random(), name: 'Task 3', priority: 3, status: 'todo'},
    {id: Math.random(), name: 'Task 4', priority: 1, status: 'progress'},
    {id: Math.random(), name: 'Task 5', priority: 2, status: 'progress'},
    {id: Math.random(), name: 'Task 6', priority: 3, status: 'progress'},
    {id: Math.random(), name: 'Task 7', priority: 1, status: 'review'},
    {id: Math.random(), name: 'Task 8', priority: 2, status: 'review'},
    {id: Math.random(), name: 'Task 9', priority: 3, status: 'review'},
    {id: Math.random(), name: 'Task 10', priority: 1, status: 'done'},
    {id: Math.random(), name: 'Task 11', priority: 2, status: 'done'},
    {id: Math.random(), name: 'Task 12', priority: 3, status: 'done'},
];
const statuses = ['todo', 'progress', 'review', 'done'];
const priority = [1, 2, 3];

function App() {
    const [tasks, setTasks] = useState(initialTasks);

    const createTask = (newName, newStatus) => {
        const newTask = {id: Math.random(), name: newName, priority: 1, status: newStatus};
        const addNewTask = [...tasks, newTask];
        setTasks(addNewTask);
    }

    const statusAndPriorityChange = (taskId, direction) => {
        const change = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1]
                if (direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1]
                if (direction === 'up') el.priority = priority[priority.indexOf(el.priority) + 1]
                if (direction === 'down') el.priority = priority[priority.indexOf(el.priority) - 1]
            }
            return el;
        })
        setTasks(change);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    const editTask = (id, updatedTask) => {
        const change = tasks.map(el => {
            if (el.id === id) {
                return {...el, updatedTask}
            }
            return el
        })
        setTasks(change);
    }


    return (
        <div className='container'>
            <Controller createTask={createTask}/>
            <div className="row">
                {statuses.map(el =>
                    <Board
                        status={el}
                        tasks={tasks}
                        deleteTask={deleteTask}
                        statusAndPriorityChange={statusAndPriorityChange}
                        priority={priority}
                        statuses={statuses}
                        editTask={editTask}
                    />)}
            </div>
        </div>
    );
}

export default App;
