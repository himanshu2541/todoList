import React, { useEffect, useState } from 'react'
import './TodoListStyle.css';
import CreateTask from '../modals/CreateTask';
import Cards from './Cards';


const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() =>{
    let arr = localStorage.getItem("taskList");
    if(arr){
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []); // Empty array for running useEffect only once 
  const toggle = () => {
    setModal(!modal);
  }
  
  const saveTask = (taskObj) =>{
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  }

  const deleteTask = (index) =>{
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList" , JSON.stringify(tempList));
    setTaskList(tempList);
  }

  const changeDetails = () =>{
      let arr = localStorage.getItem("taskList");
      if(arr){
        let obj = JSON.parse(arr);
        setTaskList(obj);
    }
  }

  const updateArrList = (obj, index) =>{
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  }

  return (
    <>
    <div className='header'>
      <h1>Todo List</h1>
      <button className='btn btn-primary' onClick={() =>setModal(true)} >Create Task</button>
    </div>
    <div className="task-container">
      
      {taskList && taskList.map((obj, index)=> <Cards taskObj={obj} index={index} deleteTask={deleteTask} changeDetails={changeDetails} updateArrList={updateArrList} />)}
    </div>
    <CreateTask modal={modal} toggle={toggle} saveTask={saveTask}/>
    </>


  )
}

export default TodoList
