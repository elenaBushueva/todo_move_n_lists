import React, {useState} from 'react';
import Board from "./Board";
import "bootstrap/dist/css/bootstrap.css"
import Controller from "./Controller";
import axios from 'axios';

// const initialTasks = [
//     {id: Math.random(), name: 'Task 1', priority: 1, status: 'todo'},
//     {id: Math.random(), name: 'Task 4', priority: 1, status: 'progress'},
//     {id: Math.random(), name: 'Task 7', priority: 1, status: 'review'},
//     {id: Math.random(), name: 'Task 11', priority: 2, status: 'done'},
// ];
const statuses = ['todo', 'progress', 'review', 'done'];
const priority = [1, 2, 3];

function App() {

    const [tasks, setTasks] = useState([]);


    const getTasks = () => {
        axios.get('https://nazarov-kanban-server.herokuapp.com/card')
            .then(res => {
                setTasks(res.data);
                console.log(res);
            })
            .catch(error => {
                console.log(error)
            })
    }

    // getTasks()

    const createTask = (newName, newStatus, newDescription) => {
        axios.post('https://nazarov-kanban-server.herokuapp.com/card', {
            name: newName,
            priority: 1,
            status: newStatus,
            description: newDescription,
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // const createTask = (newName, newStatus) => {
    //     const newTask = {id: Math.random(), name: newName, priority: 1, status: newStatus};
    //     const addNewTask = [...tasks, newTask];
    //     setTasks(addNewTask);
    // }

    const deleteTask = async (id) => {
        await axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // const deleteTask = (id) => {
    //     setTasks(tasks.filter(el => el.id !== id))
    // }

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


    const editTask = (id, newName, newPriority, newStatus) => {
        const updatedTask = {
            id,
            name: newName,
            priority: newPriority,
            status: newStatus,
        }
        const change = tasks.map(el => {
            if (el.id === id) {
                return updatedTask
            }
            return el
        })
        setTasks(change);
    }


    return (
        <div className='container'>
            <Controller createTask={createTask} getTasks={getTasks}/>
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
