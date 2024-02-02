
const BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const saveTask = async (taskData, editingTask, onTaskSaved, handleClose) => {
  try {
    const user = JSON.parse(sessionStorage.getItem('user'));
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
    } else {
      alert('Failed to save task');
    }
  } catch (error) {
    alert('Error saving task:', error);
  } finally {
    handleClose();
  }
};






const handleDeleteTask = async (taskId, setTasks) => {
  const isConfirmed = window.confirm('Are you sure you want to delete this task?');

  if (!isConfirmed) {
    return;
  }

  try {
    const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
    const response = await fetch(`http://127.0.0.1:8000/api/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
    });

    if (response.ok) {
      // Remove the deleted task from the state
      setTasks(tasks => tasks.filter(task => task.id !== taskId));
      alert('Task deleted successfully');
    } else {
      alert('Failed to delete task');
    }
  } catch (error) {
    alert(`Error deleting task: ${error}`);
  }
};

export default handleDeleteTask;

