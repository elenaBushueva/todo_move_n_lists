import React from 'react';
import Task from "./Task";


function Board(props) {


    return (
        <div className='col-4 col-lg' style={{border: '1px solid'}}>
            <h3> {props.status} </h3>
            {props.tasks
                .filter(el=> el.status === props.status)
                .sort((a, b) => b.priority - a.priority)
                .map(el =>
                    <Task
                    key={el.id}
                    task={el}
                    deleteTask={props.deleteTask}
                    statusAndPriorityChange={props.statusAndPriorityChange}
                    priority={props.priority}
                    statuses={props.statuses}
                    editTask={props.editTask}
                />)}
        </div>
    );
}

export default Board;
