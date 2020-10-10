import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input} from "reactstrap";

function Controller(props) {

    const [modal, setModal] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [statusInput, setStatusInput] = useState('todo');

    const toggle = () => setModal(!modal);

    const createNewHandler = () => {
        props.createTask(nameInput, statusInput)
        setModal(false);
        setNameInput('');
        setStatusInput('todo');
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>Create</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create new Task</ModalHeader>
                <ModalBody>
                    <Label>Name:</Label>
                    <Input type="text" placeholder="Type name here"
                           onChange={(e) => setNameInput(e.target.value)}/>
                    <Label>Status:</Label>
                    <Input type="select"
                           onChange={(e) => setStatusInput(e.target.value)}>
                        <option value='todo'>to do</option>
                        <option value='progress'>progress</option>
                        <option value='review'>review</option>
                        <option value='done'>done</option>
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}
                            onClick={createNewHandler}>Create new task</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Controller;