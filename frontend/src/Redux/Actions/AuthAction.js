import axios from 'axios';
export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', userData);
      const token = response.data.token;
      dispatch({ type: 'REGISTER_USER_SUCCESS', payload: token });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'REGISTER_USER_ERROR', payload: 'Registration failed' });
    }
  };
};


export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', userData);
      const token = response.data.token;

      
      dispatch({ type: 'LOGIN_USER_SUCCESS', payload: token });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'LOGIN_USER_ERROR', payload: 'Login failed' });
    }
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};
