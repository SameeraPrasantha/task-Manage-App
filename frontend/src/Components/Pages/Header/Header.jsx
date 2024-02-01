import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import { logoutUser } from '../../../Redux/Actions/AuthAction'; 

function getUser() {
  let user = sessionStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

export default function Header() {
  const [ setUser] = useState(getUser());
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();  

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');  
  };
  return (
    <div>
      <nav className='navbar navbar-light bg-light shadow p-3'>
        <div className="container-fluid">
          <Link to='/' className='navbar-brand mb-0 h1'>Task management App</Link>
          <div className='d-flex'>
            {isAuthenticated ? (
              <>  
                 <Link to='/task' className='btn b-color me-2'>My Account</Link>
                <a href='/' className='btn b-color' onClick={handleLogout}>Logout</a>
              </>
            ) : (
                <>
                <Link to='/login' className='btn b-color me-2'>Login</Link>
                <Link to='/register' className='btn b-color'>Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
