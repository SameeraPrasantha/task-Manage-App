
import React, { useState, useEffect } from 'react';
import PopupTask from './Tasks/PopupTask';
import { fetchTasks } from '../../../Redux/taskSlice';
import handleDeleteTask from '../../../Redux/taskSlice';

function getUser() {
  let user = sessionStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

export default function Task() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const user = getUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userTasks = await fetchTasks();
        const filteredTasks = userTasks.filter(task => task.author.id === user?.id);
        setTasks(filteredTasks);
      } catch (error) {
        alert('Error fetching and filtering tasks:', error);
      }
    };

    fetchData();
  }, [user?.id]);

  const handleTogglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setEditingTask(null);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsPopupVisible(true);
  };

  const handleTaskSaved = (newTask) => {
    if (editingTask) {
      setTasks(tasks.map(task => (task.id === newTask.id ? newTask : task)));
    } else {
      setTasks([...tasks, newTask]);
    }
  
    setIsPopupVisible(false);
    setEditingTask(null);
  };

  const handleDeleteTaskConfirmation = (taskId) => {
    handleDeleteTask(taskId, setTasks);
  };

  return (
    <div>
      <div className='container mt-5'>
        <div className='mb-5'>
          <button className='btn b-color' onClick={handleTogglePopup}> + Add Task</button>
          {isPopupVisible && <PopupTask show={isPopupVisible} handleClose={handleTogglePopup} onTaskSaved={handleTaskSaved} editingTask={editingTask} />}
        </div>
        <div className='row '>
          <div className='col-md-4 '>
            <p className='fw-bold text-secondary'>User ID: {user?.id}</p>
            <p className='fw-bold text-secondary'>Username: {user?.name}</p>
            <p className='fw-bold text-secondary'>Email: {user?.email}</p>
          </div>
        </div>
        <div className='row' style={{justifyContent: "center"}}>
          {tasks.map(task => (
            <div key={task.id} className="card text-center card-size card-color-bg ml-5 mb-3">
              <div className="card-header bg-transparent d-flex justify-content-between">
                {task.status}
              </div>
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <div className=" bg-transparent d-flex justify-content-between">
                  <div><i className="fa fa-pencil" aria-hidden="true"></i><a className='mx-2 text-decoration-none text-white d-md-none d-lg-inline' style={{cursor: "pointer"}} onClick={() => handleEditTask(task)}>Edit</a></div>
                  <div><i className="fa fa-trash" aria-hidden="true"></i><span className='mx-2 text-decoration-none text-white d-md-none d-lg-inline' style={{cursor: "pointer"}} onClick={() => handleDeleteTaskConfirmation(task.id)}>Delete</span></div>
                </div>
              </div>
              <div className="card-footer text-white">
                {task.due_date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}