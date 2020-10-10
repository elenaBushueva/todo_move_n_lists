import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input} from "reactstrap";

function EditModal(props) {

    const [editMode, setEditMode] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [statusInput, setStatusInput] = useState('todo');

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const editHandler = () => {
        props.editTask(nameInput, statusInput)
        setModal(false);
        setNameInput('');
        setStatusInput('todo');
    }

    return (
        <div>
            <Button outline color="secondary" size="sm"
                    onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
                <ModalBody>
                    <Label>Edit Task name:</Label>
                    <Input type="text" placeholder="Type name here"
                           onChange={(e) => setNameInput(e.target.value)}/>
                    <Label>Edit task status:</Label>
                    <Input type="select"
                           onChange={(e) => setStatusInput(e.target.value)}>
                        <option value='todo'>to do</option>
                        <option value='progress'>progress</option>
                        <option value='review'>review</option>
                        <option value='done'>done</option>
                    </Input>
                    <Label>Edit task priority:</Label>
                    <Input type="select"
                           onChange={(e) => setStatusInput(e.target.value)}>
                        <option value='1'> 1</option>
                        <option value='2'> 2</option>
                        <option value='3'> 3</option>
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}
                            onClick={editHandler}>Edit</Button>{' '}
                    <Button outline color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EditModal;

