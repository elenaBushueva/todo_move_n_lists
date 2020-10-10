import React, {useState} from 'react';
import EditModal from './EditModal';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";


function Task(props) {
    const [editMode, setEditMode]=useState(false);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"> {props.task.name} </h5>
                <h6>priority {props.task.priority}</h6>
                <Button outline color="primary" size="sm"
                        disabled={props.task.priority === props.priority[props.priority.length - 1]}
                        onClick={() => props.statusAndPriorityChange(props.task.id, 'up')}>priority ↑</Button>
                <Button outline color="primary" size="sm"
                        disabled={props.task.priority === props.priority[0]}
                        onClick={() => props.statusAndPriorityChange(props.task.id, 'down')}>priority ↓</Button>
                <Button outline color="primary" size="sm"
                        disabled={props.task.status === props.statuses[0]}
                        onClick={() => props.statusAndPriorityChange(props.task.id, 'left')}>status ←</Button>
                <Button outline color="primary" size="sm"
                        disabled={props.task.status === props.statuses[props.statuses.length - 1]}
                        onClick={() => props.statusAndPriorityChange(props.task.id, 'right')}>status →</Button>

                <EditModal editTask={props.editTask}/>
                <>
                    <Button outline color="danger" size="sm" onClick={toggle}>delete</Button>
                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle}>Are you sure you want delete <br/> {props.task.name}</ModalHeader>
                        <ModalFooter>
                            <Button color="danger"
                                    onClick={() => props.deleteTask(props.task.id)}>Yes, I want delete</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </>
            </div>
            </div>
            );
            }

            export default Task;
