import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import './CreateTaskStyle.css'
export default function CreateTask({ modal, toggle,saveTask }) {

    const [taskName, setTaskName] = useState('');
    const [desc, setDesc] = useState('');
    const handleChange = (e) =>{
        const {name, value} = e.target;
        if(name==='taskName'){
            setTaskName(value);
        }
        else{
            setDesc(value);
        }
    }
    const handleSave = (e) =>{
        e.preventDefault();
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = desc;
        saveTask(taskObj);
    }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
                <input type="text" className="form-control" style={{marginBottom: '1rem'}} placeholder="Enter Task Title" value={taskName} onChange={handleChange} name="taskName"/>
            </div>
            <div className="form-group">
                <textarea name="taskDesc" id="" cols="30" rows="10" className="form-control" placeholder="Enter Task Details" value={desc} onChange={handleChange}></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
