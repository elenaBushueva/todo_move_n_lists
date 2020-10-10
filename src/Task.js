import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";


function Task(props) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"> {props.task.name} </h5>
                <h6>priority {props.task.priority}</h6>
                <Button outline color="primary"
                        onClick={() => props.statusAndPriorityChange(props.task.id, 'up')}>priority ↑</Button>
                <Button outline color="primary"
                        onClick={() => props.statusAndPriorityChange(props.task.id, 'down')}>priority ↓</Button>
                <Button outline color="primary"
                        onClick={() => props.statusAndPriorityChange(props.task.id, 'right')}>status →</Button>
                <Button outline color="primary"
                        onClick={() => props.statusAndPriorityChange(props.task.id, 'left')}>status ←</Button> <br/>
                <Button outline color="secondary">edit</Button>
                <>
                    <Button outline color="danger" onClick={toggle}>delete</Button>
                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle}>Are you sure you want delete:</ModalHeader>
                        <ModalBody>

                        </ModalBody>
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
