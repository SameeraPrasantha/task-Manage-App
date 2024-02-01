import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PopupTask = ({ show, handleClose, onTaskSaved, editingTask }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    status: '',
    due_date: '',
  });
  
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setTaskData({
        title: editingTask.title,
        description: editingTask.description,
        status: editingTask.status,
        due_date: editingTask.due_date,
      });
    }
  }, [editingTask]);

  const user = JSON.parse(sessionStorage.getItem('user'));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSaveTask = async () => {
    try {
      setIsSaving(true); // Set isSaving to true when starting to save

      // Use different API endpoint for editing (PUT method)
      const apiUrl = editingTask ? `http://127.0.0.1:8000/api/tasks/${editingTask.id}` : 'http://127.0.0.1:8000/api/tasks';
      const method = editingTask ? 'PUT' : 'POST';

      const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
      const response = await fetch(apiUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify({ ...taskData, userID: user?.id }),
      });

      if (response.ok) {
        alert('Task saved successfully');
        onTaskSaved(taskData);
        // Note: Don't close the modal here; it will be closed later based on isSaving state
      } else {
        alert('Failed to save task');
      }
    } catch (error) {
      alert('Error saving task:', error);
    } finally {
      setIsSaving(false); // Set isSaving back to false after saving
      handleClose(); // Close the modal here
    }
  };

  return (
    <Modal show={show} onHide={() => !isSaving && handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">
              Task Title
            </label>
            <input type="text"
              name="title"
              className="form-control"
              id="exampleInputTitle"
              value={taskData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDescription" className="form-label">
              Task Description
            </label>
            <textarea
              className="form-control"
              name="description"
              id="exampleInputDescription"
              rows="3"
              value={taskData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDescription" className="form-label">
              Task Status
            </label>
            <select
              name="status"
              className="form-control"
              id=""
              value={taskData.status}
              onChange={handleInputChange}
            >
              <option value="">Select Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Important">Important</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDueDate" className="form-label">
              Due Date
            </label>
            <input
              type="date"
              name="due_date"
              className="form-control"
              id="exampleInputDueDate"
              value={taskData.due_date}
              onChange={handleInputChange}
            />
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleSaveTask}>
          Save Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupTask;
