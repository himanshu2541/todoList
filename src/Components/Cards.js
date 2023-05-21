import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import "./CardsStyle.css";
import EditTask from "../modals/EditTask";
const Cards = (props) => {
  const [modal, setModal] = useState(false);
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const handleDelete = () => {
    props.deleteTask(props.index);
    props.changeDetails();
  };

  const toggle = () =>{
    setModal(!modal);
  }


  const updateTask = (obj) =>{
    props.updateArrList(obj, props.index);
    props.changeDetails();
  }

  return (
    <div
      className="card-container"
      style={{ "background-color": colors[props.index % 5].secondaryColor }}
    >
      <div className="card-header">
        <div className="card-title">{props.taskObj.Name}</div>
        <div
          className="card-lines"
          style={{
            "background-color": colors[props.index % 4].primaryColor,
          }}
        ></div>
      </div>

      <div className="card-content">
        <p className="card-desc">{props.taskObj.Description}</p>
      </div>
      <div className="card-btn">
        <CiEdit size={20} className="edit" onClick={() => setModal(true)}></CiEdit>
        <RiDeleteBinLine
          size={20}
          className="delete"
          onClick={handleDelete}
        ></RiDeleteBinLine>
      </div>
      <EditTask modal={modal} toggle = {toggle} updateTask={updateTask} taskObj = {props.taskObj} setModal={setModal}/>
    </div>
  );
};

export default Cards;
