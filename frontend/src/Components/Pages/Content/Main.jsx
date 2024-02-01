import React, { useState, useEffect } from 'react';
import '../../Assets/style.css';
import { fetchTasks } from '../../../Redux/taskSlice';

export default function Main() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allTasks = await fetchTasks();
                setTasks(allTasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData();
    }, []);

    const filterTasksByStatus = (status) => {
        return tasks.filter(task => task.status === status);
    };

    const renderTaskSection = (status) => {
        const filteredTasks = filterTasksByStatus(status);

        return (
            <div key={status}>
                <h2 className='text-center'>{status}</h2>
                <div className='row' style={{ justifyContent: "center" }}>
                    {filteredTasks.map(task => (
                        <div key={task.id} className="card text-center card-size card-color-bg ml-5 mb-3">
                            <div className="card-header bg-transparent d-flex justify-content-between">
                                {task.status}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{task.title}</h5>
                                <p className="card-text">{task.description}</p>
                                <div className=" bg-transparent d-flex justify-content-between">
                                </div>
                            </div>
                            <div className="card-footer text-white bg-transparent">
                               Due Date : {task.due_date}
                            </div>
                            <div className="card-footer text-white bg-transparent">
                               Author : {task.author.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className='container mt-5'>
            <div className='row'>
                {renderTaskSection('Important')}
                {renderTaskSection('In Progress')}
                {renderTaskSection('Completed')}

            </div>
        </div>
    );
}
