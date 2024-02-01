
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

