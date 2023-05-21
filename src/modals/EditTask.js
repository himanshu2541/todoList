import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function EditTask({ modal, toggle, taskObj , updateTask, setModal}) {

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
    
    useEffect(()=>{
      setTaskName(taskObj.Name);
      setDesc(taskObj.Description);
    }, []);

    const handleUpdate = (e) =>{
      e.preventDefault();
      let tempObj = {};
      tempObj['Name'] = taskName;
      tempObj['Description'] = desc;
      updateTask(tempObj);
      setModal(false);
    }



  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
          <Button color="primary" onClick={handleUpdate} >
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
